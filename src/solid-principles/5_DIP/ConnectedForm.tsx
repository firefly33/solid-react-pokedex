import Form from "./Form";
import useTestMutation from "./hooks/useTestMutation";

function ConnectedForm() {

  const { mutate } = useTestMutation();

  function handleSubmit(values: { name: string; type: string }) {
    mutate({
      name: values.name,
      type: values.type,
    });
  }


  return <section>
    <Form onSubmit={handleSubmit} />
  </section>;
}

export default ConnectedForm;
