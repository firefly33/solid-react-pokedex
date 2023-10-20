## 1. Le pitch

Un composant ne doit pas dépendre d'un type dont il n'a pas besoin.

Exemple : une card de product, à l'intérieur, on rend un thumbnail, et celui-là on lui passe l'objet entier

Ex :

<Product product={product} />
<>
    <Thumbnail product={product} />
</>
