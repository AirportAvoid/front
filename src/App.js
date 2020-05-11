import React, { useState, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [api, setApi] = useState();
  const [apiReady, setApiReady] = useState();
  const WS_PROVIDER = 'ws://localhost:9944';

  useEffect(() => {
    const provider = new WsProvider(WS_PROVIDER);

    ApiPromise.create(provider)
      .then((api) => {
        setApi(api);
        api.isReady.then(() => setApiReady(true));
      })
      .catch((e) => console.error(e));
  }, []);

  const [airport, setAirport] = useState({});
  const [cloud, setCloud] = useState({});

  useEffect(() => {
    //function airport
  }, []);

  useEffect(() => {
    //function cloud
  }, []);

  return (
    <div class="container">
      < br/>
      <Form method="POST">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Quantidade de Aeroportos</Form.Label>
          <Form.Control type="text" name="airport" placeholder="Minimo 3 aeroportos" />
          <Form.Text className="text-muted">
            Quantos aeroportos existem em sua cidade?
          </Form.Text>
        </Form.Group>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Quantidade de Nuvens</Form.Label>
          <Form.Control type="text" name="cloud" placeholder="Minimo de 4 nuvens..." />
          <Form.Text className="text-muted">
            Quantas nuvens estão sobre a cidade no momento?
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Simular
        </Button>
      </Form>
    </div>
  );
}