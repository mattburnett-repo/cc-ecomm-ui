export default function OrderConfirmationDisplay ( props ) {
    const { data } = props;
    
    return (
        <div>
            <div role="presentation" aria-label="confirmation-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </div>
            <button aria-label="home">Home</button>
            <button aria-label="logout">Log Out</button>
        </div>
    )
}