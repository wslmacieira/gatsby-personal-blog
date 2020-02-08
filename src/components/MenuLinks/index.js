import React from 'react';

import links from './content';

import * as S from './styles';

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, i) => (
        <S.MenuLinksItem key={i}>
          <S.MenuLinksLink
            cover
            to={link.url}
            activeClassName="active"
            direction="left"
            bg="#16202c"
            duration={0.6}
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
