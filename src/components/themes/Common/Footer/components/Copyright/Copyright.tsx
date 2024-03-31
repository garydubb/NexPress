import Image from "@/components/Atoms/Image";
import Container from "@/components/themes/Common/Container";

const NexPressCopyrightBar = () => {
    return (
        <div className="py-4 border-t">
            <Container>
                {/* TODO: To be replaced from backend */}
                <div className="container flex items-center justify-between">
                    <p className="">&copy; NexPress - All Right Reserved</p>
                    <div>
                        <Image
                            className="h-8 w-auto"
                            width={100}
                            height={1}
                            src="/assets/images/logo-nexpress.png"
                            alt="NexPress"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NexPressCopyrightBar;
