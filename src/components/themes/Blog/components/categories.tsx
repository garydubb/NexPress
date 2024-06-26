export default function Categories({ categories }: any) {
  return (
    <span className="ml-1">
      under
      {categories && categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <span key={index} className="ml-1">
            {category.node.name}
          </span>
        ))
      ) : (
        <span className="ml-1">
          {categories ? categories.edges.node.name : ''}
        </span>
      )}
    </span>
  );
}
