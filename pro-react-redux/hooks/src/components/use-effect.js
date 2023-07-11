import React, { useState, useEffect, useCallback, useMemo } from 'react';

export default function UseEffect() {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <ClassCounter value={value} />
        <HookCounter value={value} />
        <Notification />
        <PlanetInfo id={value} />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>;
  }
}

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log('mount');
    return () => console.log('unmount');
  }, []);

  useEffect(() => console.log('update'));

  return <p>{value}</p>;
};

const Notification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return <div>{visible && <p>Hello</p>}</div>;
};

class ClassCounter extends React.Component {
  componentDidMount() {
    console.log('class: mount');
  }

  componentDidUpdate() {
    console.log('class: update');
  }

  componentWillUnmount() {
    console.log('class: unmount');
  }

  render() {
    return <p>{this.props.value}</p>;
  }
}

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}/`)
    .then((res) => res.json())
    .then((data) => data);
};

const useRequest = (request) => {
  const initialState = useMemo(
    () => ({
      data: null,
      loading: true,
      error: null,
    }),
    []
  );

  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    setDataState(initialState); // reset state
    let cancelled = false;
    request()
      .then(
        (data) =>
          !cancelled &&
          setDataState({
            data,
            loading: false,
            error: null,
          })
      )
      .catch(
        (error) =>
          !cancelled &&
          setDataState({
            data: null,
            loading: false,
            error,
          })
      );
    return () => (cancelled = true);
  }, [request, initialState]);

  return dataState;
};

// Custom hook
const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id]);
  return useRequest(request);
};

const PlanetInfo = ({ id }) => {
  const { data, loading, error } = usePlanetInfo(id);

  if (error) {
    return <div>Something is wrong</div>;
  } else if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {id} - {data.name}
    </div>
  );
};
