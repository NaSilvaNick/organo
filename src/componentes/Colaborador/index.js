import './Colaborador.css'

const Colaborador = prop => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: prop.corDeFundo}}> 
                <img src={prop.imagem} alt={prop.nome}/>
            </div>
            <div className='rodape'>
                <h4>{prop.nome}</h4>
                <h5>{prop.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;