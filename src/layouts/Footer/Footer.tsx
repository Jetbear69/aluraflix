import Logo from "../../components/Utils/Logo/Logo";

function Footer() {
    return (
        <footer className="bg-dark w-full border-t-4 footer-shadow shadow-tertiary border-tertiary justify-center items-center flex p-4 flex-col gap-2">
            <Logo />
            <p className="text-white text-center">Made with ❤️ by <a href="https://github.com/Jetbear69">Oliver.dev</a></p>
        </footer>
    );
}

export default Footer;