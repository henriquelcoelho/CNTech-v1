function App() {
  return (
    <div>
      <h1 style={{color: 'blue', fontSize: '32px', textAlign: 'center', margin: '20px'}}>
        SITE FUNCIONANDO!
      </h1>
      <div style={{textAlign: 'center', fontSize: '20px', margin: '20px'}}>
        <p>Comunidade das Nações - CNTech</p>
        <p>Se você está vendo isto, o React está funcionando!</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', gap: '20px', margin: '30px'}}>
        <div style={{padding: '20px', border: '2px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9'}}>
          <h3>🏛️ Igreja</h3>
          <p>Site institucional</p>
        </div>
        <div style={{padding: '20px', border: '2px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9'}}>
          <h3>🎓 CNTech</h3>
          <p>Trilhas de IA e Blockchain</p>
        </div>
        <div style={{padding: '20px', border: '2px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9'}}>
          <h3>📖 Devocional</h3>
          <p>Devocional diário</p>
        </div>
      </div>
    </div>
  )
}

export default App

