export const Infos = ({avatar_url, userName, login, public_repos, followers, following, html_url}) =>{
    return(
        <>
            <img src={avatar_url} alt={userName} />
            <h1>{userName}</h1>
            <p>{login}</p>
            <p>{public_repos} repositórios criados</p>
            <p>{followers} seguidores, seguindo {following}</p>
            <a href={html_url}>Acessar</a>
        </>
    )
}