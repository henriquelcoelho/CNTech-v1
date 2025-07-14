-- =====================================================
-- SETUP COMPLETO DO BANCO DE DADOS SUPABASE
-- Comunidade das Nações / São Paulo
-- =====================================================

-- Execute estes comandos no SQL Editor do Supabase
-- na ordem apresentada

-- =====================================================
-- 1. TABELA DE PERFIS DE USUÁRIO
-- =====================================================

-- Criar tabela de perfis
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  phone TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Políticas de segurança para profiles
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can update any profile" ON profiles
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can insert profiles" ON profiles
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Função para criar perfil automaticamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para criar perfil quando usuário se registra
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =====================================================
-- 2. TABELA DE POSTS DO BLOG
-- =====================================================

-- Criar tabela de posts do blog
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  category TEXT DEFAULT 'geral' CHECK (category IN ('tecnologia', 'espiritualidade', 'comunidade', 'geral')),
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  published BOOLEAN DEFAULT false,
  featured_image TEXT,
  tags TEXT[],
  slug TEXT UNIQUE,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Políticas para blog_posts
CREATE POLICY "Anyone can view published posts" ON blog_posts
  FOR SELECT USING (published = true);

CREATE POLICY "Authors can view own posts" ON blog_posts
  FOR SELECT USING (auth.uid() = author_id);

CREATE POLICY "Admins can view all posts" ON blog_posts
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Authenticated users can create posts" ON blog_posts
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update own posts" ON blog_posts
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Admins can update any post" ON blog_posts
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Authors can delete own posts" ON blog_posts
  FOR DELETE USING (auth.uid() = author_id);

CREATE POLICY "Admins can delete any post" ON blog_posts
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- =====================================================
-- 3. TABELA DE EVENTOS
-- =====================================================

-- Criar tabela de eventos
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE,
  location TEXT,
  category TEXT DEFAULT 'geral' CHECK (category IN ('culto', 'cntech', 'workshop', 'conferencia', 'geral')),
  max_participants INTEGER,
  current_participants INTEGER DEFAULT 0,
  registration_required BOOLEAN DEFAULT false,
  registration_deadline TIMESTAMP WITH TIME ZONE,
  featured_image TEXT,
  created_by UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Políticas para events
CREATE POLICY "Anyone can view events" ON events FOR SELECT USING (true);

CREATE POLICY "Admins can manage events" ON events
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- =====================================================
-- 4. TABELA DE DEVOCIONAIS
-- =====================================================

-- Criar tabela de devocionais
CREATE TABLE devotionals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL UNIQUE,
  title TEXT NOT NULL,
  theme TEXT,
  verse TEXT NOT NULL,
  reference TEXT NOT NULL,
  prayer TEXT NOT NULL,
  reading_chapter TEXT NOT NULL,
  reading_content TEXT,
  reflection TEXT NOT NULL,
  application TEXT,
  song_title TEXT,
  song_artist TEXT,
  song_lyrics TEXT,
  song_reflection TEXT,
  featured_image TEXT,
  created_by UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE devotionals ENABLE ROW LEVEL SECURITY;

-- Políticas para devotionals
CREATE POLICY "Anyone can view devotionals" ON devotionals FOR SELECT USING (true);

CREATE POLICY "Admins can manage devotionals" ON devotionals
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- =====================================================
-- 5. TABELA DE TRILHAS CNTECH
-- =====================================================

-- Criar tabela de trilhas
CREATE TABLE cntech_tracks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  duration_months INTEGER NOT NULL,
  level TEXT CHECK (level IN ('iniciante', 'intermediario', 'avancado')),
  price DECIMAL(10,2),
  currency TEXT DEFAULT 'BRL',
  max_students INTEGER,
  current_students INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  featured_image TEXT,
  syllabus JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE cntech_tracks ENABLE ROW LEVEL SECURITY;

-- Políticas para cntech_tracks
CREATE POLICY "Anyone can view active tracks" ON cntech_tracks
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage tracks" ON cntech_tracks
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- =====================================================
-- 6. TABELA DE INSCRIÇÕES NAS TRILHAS
-- =====================================================

-- Criar tabela de inscrições
CREATE TABLE track_enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  track_id UUID REFERENCES cntech_tracks(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'completed', 'cancelled')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'overdue', 'cancelled')),
  enrollment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  start_date TIMESTAMP WITH TIME ZONE,
  completion_date TIMESTAMP WITH TIME ZONE,
  progress_percentage INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, track_id)
);

-- Habilitar RLS
ALTER TABLE track_enrollments ENABLE ROW LEVEL SECURITY;

-- Políticas para track_enrollments
CREATE POLICY "Users can view own enrollments" ON track_enrollments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own enrollments" ON track_enrollments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own enrollments" ON track_enrollments
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all enrollments" ON track_enrollments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can manage all enrollments" ON track_enrollments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- =====================================================
-- 7. TABELA DE COMENTÁRIOS
-- =====================================================

-- Criar tabela de comentários
CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Políticas para comments
CREATE POLICY "Anyone can view approved comments" ON comments
  FOR SELECT USING (is_approved = true);

CREATE POLICY "Authors can view own comments" ON comments
  FOR SELECT USING (auth.uid() = author_id);

CREATE POLICY "Authenticated users can create comments" ON comments
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update own comments" ON comments
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Admins can manage all comments" ON comments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- =====================================================
-- 8. FUNÇÕES AUXILIARES
-- =====================================================

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para atualizar updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_devotionals_updated_at BEFORE UPDATE ON devotionals
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cntech_tracks_updated_at BEFORE UPDATE ON cntech_tracks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_track_enrollments_updated_at BEFORE UPDATE ON track_enrollments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_comments_updated_at BEFORE UPDATE ON comments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- 9. ÍNDICES PARA PERFORMANCE
-- =====================================================

-- Índices para profiles
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_profiles_email ON profiles(email);

-- Índices para blog_posts
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX idx_blog_posts_created_at ON blog_posts(created_at DESC);

-- Índices para events
CREATE INDEX idx_events_date ON events(event_date);
CREATE INDEX idx_events_category ON events(category);

-- Índices para devotionals
CREATE INDEX idx_devotionals_date ON devotionals(date DESC);

-- Índices para track_enrollments
CREATE INDEX idx_track_enrollments_user ON track_enrollments(user_id);
CREATE INDEX idx_track_enrollments_track ON track_enrollments(track_id);
CREATE INDEX idx_track_enrollments_status ON track_enrollments(status);

-- =====================================================
-- 10. DADOS INICIAIS
-- =====================================================

-- Inserir trilhas CNTech iniciais
INSERT INTO cntech_tracks (name, description, duration_months, level, price, max_students, syllabus) VALUES
(
  'IA para Iniciantes',
  'Fundamentos de Inteligência Artificial sob uma perspectiva cristã',
  12,
  'iniciante',
  297.00,
  50,
  '{"modules": [
    {"title": "Fundamentos Matemáticos e Python", "duration": "2 meses"},
    {"title": "Programação Avançada e Manipulação de Dados", "duration": "2 meses"},
    {"title": "Machine Learning Básico", "duration": "2 meses"},
    {"title": "Deep Learning Introdutório", "duration": "2 meses"},
    {"title": "IA Generativa e Ética", "duration": "2 meses"},
    {"title": "Projetos Práticos e Ministério", "duration": "2 meses"}
  ]}'
),
(
  'IA Avançada',
  'Machine Learning e Deep Learning Profissional',
  6,
  'avancado',
  497.00,
  30,
  '{"modules": [
    {"title": "Algoritmos Avançados de Machine Learning", "duration": "1 mês"},
    {"title": "Deep Learning Avançado", "duration": "1 mês"},
    {"title": "MLOps e Sistemas em Produção", "duration": "1 mês"},
    {"title": "IA para Processamento de Linguagem Natural", "duration": "1 mês"},
    {"title": "Computer Vision Avançado", "duration": "1 mês"},
    {"title": "Liderança e Impacto Social", "duration": "1 mês"}
  ]}'
),
(
  'Blockchain Básico',
  'Fundamentos da Tecnologia Blockchain',
  8,
  'iniciante',
  247.00,
  40,
  '{"modules": [
    {"title": "Fundamentos de Criptografia", "duration": "1 mês"},
    {"title": "Introdução ao Bitcoin", "duration": "1 mês"},
    {"title": "Tecnologia Blockchain", "duration": "1 mês"},
    {"title": "Ethereum e Smart Contracts", "duration": "1 mês"},
    {"title": "DeFi e Aplicações Financeiras", "duration": "1 mês"},
    {"title": "NFTs e Tokens", "duration": "1 mês"},
    {"title": "Outras Blockchains e Interoperabilidade", "duration": "1 mês"},
    {"title": "Aplicações Práticas e Ministério", "duration": "1 mês"}
  ]}'
),
(
  'Desenvolvimento Blockchain',
  'Programação de DApps e Smart Contracts',
  10,
  'avancado',
  697.00,
  25,
  '{"modules": [
    {"title": "Solidity Avançado", "duration": "1 mês"},
    {"title": "Desenvolvimento Frontend para DApps", "duration": "1 mês"},
    {"title": "Arquitetura de DApps", "duration": "1 mês"},
    {"title": "DeFi Development", "duration": "1 mês"},
    {"title": "NFTs e Tokenização", "duration": "1 mês"},
    {"title": "Segurança e Auditoria", "duration": "1 mês"},
    {"title": "Blockchains Alternativas", "duration": "1 mês"},
    {"title": "DevOps para Blockchain", "duration": "1 mês"},
    {"title": "Blockchain Enterprise", "duration": "1 mês"},
    {"title": "Projeto Final e Carreira", "duration": "1 mês"}
  ]}'
);

-- Inserir devocional de exemplo
INSERT INTO devotionals (date, title, theme, verse, reference, prayer, reading_chapter, reflection, song_title, song_artist) VALUES
(
  CURRENT_DATE,
  'Planos de Esperança',
  'Confiança nos planos de Deus',
  'Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais.',
  'Jeremias 29:11',
  'Pai celestial, agradecemos por este novo dia que nos concedes. Preparamos nossos corações para receber Tua Palavra e pedimos que o Espírito Santo nos guie em nossa reflexão sobre os Teus planos para nossas vidas.',
  'Jeremias 29',
  'Em nossa era digital e tecnológica, assim como o CNTech nos ensina sobre inovação, Deus também tem planos inovadores para nossas vidas. Quando enfrentamos incertezas sobre o futuro, podemos descansar na promessa de que Deus já preparou um caminho.',
  'Planos de Esperança',
  'Fernandinho'
);

-- =====================================================
-- 11. VIEWS ÚTEIS
-- =====================================================

-- View para estatísticas do dashboard
CREATE VIEW admin_stats AS
SELECT 
  (SELECT COUNT(*) FROM profiles) as total_users,
  (SELECT COUNT(*) FROM profiles WHERE role = 'admin') as admin_users,
  (SELECT COUNT(*) FROM profiles WHERE role = 'user') as regular_users,
  (SELECT COUNT(*) FROM profiles WHERE created_at >= date_trunc('month', CURRENT_DATE)) as new_users_this_month,
  (SELECT COUNT(*) FROM blog_posts WHERE published = true) as published_posts,
  (SELECT COUNT(*) FROM events WHERE event_date >= CURRENT_DATE) as upcoming_events,
  (SELECT COUNT(*) FROM track_enrollments WHERE status = 'active') as active_enrollments;

-- View para posts do blog com informações do autor
CREATE VIEW blog_posts_with_author AS
SELECT 
  bp.*,
  p.full_name as author_name,
  p.avatar_url as author_avatar
FROM blog_posts bp
LEFT JOIN profiles p ON bp.author_id = p.id;

-- =====================================================
-- SETUP CONCLUÍDO!
-- =====================================================

-- Após executar todos os comandos acima:
-- 1. Registre-se no site
-- 2. Execute o comando abaixo substituindo pelo seu email:

-- UPDATE profiles SET role = 'admin' WHERE email = 'seu-email@exemplo.com';

-- Agora você terá acesso completo ao painel administrativo!

