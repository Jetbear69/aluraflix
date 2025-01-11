import BannerProps from "../../models/BannerProps";

function Banner({ children }: BannerProps) {
    return (
        <section className="relative border-b-4 border-primary overflow-hidden" style={{ height: "820px" }}>
            <img
                className="relative left-0 object-bottom -z-50 object-cover w-full bottom-0 opacity-60 "
                src="/banner.png"
                alt="banner"
                style={{ height: "920px"}}
            />
            <div className="absolute inset-0 flex items-center justify-center w-full z-0">
                {children}
            </div>
        </section>
    );
}

export default Banner;
