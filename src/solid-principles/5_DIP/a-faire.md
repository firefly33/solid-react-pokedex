## 1. Le pitch : Dependency inversion

Autoriser les composants à s'étendre plutôt que les fermer, et donc devoir être repris à chaque modif

<Form onSubmit={} />

<ConnectedForm>
    () => {
        handleSubmit() => {}
        return (
            <Form onSubmit={handleSubmit}>
        )
    }

</ConnectedForm>
