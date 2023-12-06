 

const Profile = (userName : string , email : string ) => {
    return(

        <div >
            <h1>Perfil de {userName} </h1>
            <p>email: </p>
            <p>{email}</p>
        </div>
    )
} 

export default {Profile};