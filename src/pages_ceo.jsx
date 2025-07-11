const url_base = "https://wololo.com";

const SEO = ({ title, description, image, url }) => {
  return (
    <>
      {title && <title>{title}</title>}
      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      {title && <meta property="og:title" content={title} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
    </>
  );
};

export const AboutSEO = () => {
  return (
    <SEO
      title="Sobre Nosotros | Tu Tienda Online"
      description="Conocé la historia, misión y valores de Tu Tienda Online. Productos de calidad y servicio confiable."
      url={`${url_base}/about`}
    />
  );
};

export const ContactSEO = () => {
  return (
    <SEO
      title="Contacto | Tu Tienda Online"
      description="¿Tenés dudas o consultas? Contactanos, nuestro equipo está para ayudarte."
      url={`${url_base}/contact`}
    />
  );
};

export const LoginSEO = () => {
  return (
    <>
      <SEO title="Iniciar sesión" />
      <meta name="robots" content="noindex" />
    </>
  );
};

export const ProductAdminSEO = () => {
  return (
    <>
      <SEO title="Producto | Panel de Administracion" />
      <meta name="robots" content="noindex" />
    </>
  );
};

export const ProductSEO = ({ product }) => {
  return (
    <SEO
      title={`${product.title} | Tu Tienda Online`}
      description={product.description}
      url={`${url_base}/product/${product.id}`}
      image={product.image}
    />
  );
};

export const ProductsAdminSEO = () => {
  return (
    <>
      <SEO title="Producto | Panel de Administracion" />
      <meta name="robots" content="noindex" />
    </>
  );
};

export const ProductsSEO = ({ category }) => {
  return (
    <SEO
      title="Productos | TiendaFerpecta"
      description="Descubrí nuestra variedad de productos exclusivos. Calidad garantizada y envío rápido."
      url={category ? url_base : `${url_base}/${category}`}
    />
  );
};

export const ShopingCartSEO = () => {
  return (
    <>
      <SEO title="Carrito de compras | TiendaFerpecta" />
      <meta name="robots" content="noindex" />
    </>
  );
};
