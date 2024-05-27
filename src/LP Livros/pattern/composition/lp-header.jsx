import '../../styles.css'

export default function Header() {
    return (
        <div className="header-container">
            <div className="main">
                <div className="center">
                    <div className="menu">
                        <div className="logo">
                            <h3>My.Books</h3>
                        </div>
                        <div className="item-menu">
                            <a href="#">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}