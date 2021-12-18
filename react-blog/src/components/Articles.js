


const Articles = ({ match })=> {
    const name = match.params.name;

    return(
    <>
        <h1>This is an {name} Article.</h1>
    </>
    )
}

export default Articles;