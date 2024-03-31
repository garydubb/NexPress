import Link from 'next/link';

export default function MenuList({ items }: any) {
  const list = items.edges;

  return (
    <>
      {list &&
        list.length > 0 &&
        list.map((el, index) => (
          <Link
            key={index}
            href={el.node.uri}
            className="mx-3 bg-white hover:bg-black hover:text-white border border-black text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            {el.node.label}
          </Link>
        ))}
    </>
  );
}
