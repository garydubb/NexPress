import Image from '@/components/Atoms/Image';
import Container from '@/components/themes/nexPressShop/Container';

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
              src="https://tailwindui.com/img/logos/mark.svg"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NexPressCopyrightBar;
