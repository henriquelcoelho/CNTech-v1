-- ========================================
-- CRIAR PRIMEIRO USUÁRIO ADMINISTRADOR
-- Comunidade das Nações - CNTech
-- ========================================

-- PASSO 1: Registre-se primeiro no site: http://localhost:5173

-- PASSO 2: Execute este comando substituindo o email:
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'SEU-EMAIL-AQUI@exemplo.com';

-- PASSO 3: Verifique se funcionou:
SELECT email, role, full_name, created_at 
FROM profiles 
WHERE role = 'admin';

-- OPCIONAL: Ver todos os usuários registrados:
SELECT email, role, full_name, created_at 
FROM profiles 
ORDER BY created_at DESC;

-- ========================================
-- INSTRUÇÕES:
-- 1. Substitua 'SEU-EMAIL-AQUI@exemplo.com' pelo email que você usou para se registrar
-- 2. Execute no SQL Editor do Supabase Dashboard
-- 3. Verifique se o usuário agora tem role = 'admin'
-- ======================================== 