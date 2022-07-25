function WelcomePage({ user, setIsLoggedIn }){
       
    const handleLogout = () => setIsLoggedIn(false)

    return (
        <>
            <h2>Bem-vindo, {user}!</h2>
            <button 
                onClick={handleLogout}>Sair
            </button>
        </>
    )

}

export default WelcomePage