import React, { useState } from 'react'
import LabeledInput from '../components/LabeledInput';
import LabeledDataList from '../components/LabeledDataList';
import Labeler from '../components/Labeler';
import Switch from '../components/Switch';

function Pedidos() {
  const [conEnvio, setConEnvio] = useState(false);
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const clientes = [{
    Nombre: 'Marcos',
    Apellido: 'Barbas',
  },
  {
    Nombre: 'Ian Luis',
    Apellido: 'Noa Delgado',
  }
  ];
  const onChangeName = (newName) => {
    setName(newName);
  }
  const onChangeClient = (newClient) => {
    setClient(newClient);
  }
  return (
    <div className='Pedidos'>
      <h1>Pedidos de Cliente</h1>
      <div>
      </div>
      <form className="Pedidos-form">

        <LabeledDataList options={clientes} input={client} onChangeInput={onChangeClient} hidden={false} text='Cliente' />
        
        <Labeler text="Envio">
          <Switch />
        </Labeler>
        <LabeledInput type={'text'} input={name} onChangeInput={onChangeName} text="Nombre" hidden={false} />
        <LabeledInput type={'text'} input={name} onChangeInput={onChangeName} text="Apellido" hidden={false} />
        <LabeledInput type={'text'} input={name} onChangeInput={onChangeName} text="Calle" hidden={conEnvio} />
        <LabeledInput type={'text'} input={name} onChangeInput={onChangeName} text="Altura" hidden={conEnvio} />
        <LabeledInput type={'text'} input={name} onChangeInput={onChangeName} text="Depto" hidden={conEnvio} />
        <LabeledInput type={'text'} input={name} onChangeInput={onChangeName} text="Telefono" hidden={false} />
        <LabeledInput type={'text'} input={name} onChangeInput={onChangeName} text="Costo de envio" hidden={conEnvio} />
        <LabeledInput type={'text'} input={name} onChangeInput={onChangeName} text="Observaciones" hidden={false} />
        <input type="button" value="Generar Pedido" className="Pedidos-cliente" />
      </form>
    </div>
  )
}

export default Pedidos