import React from 'react';

import * as S from './styles';

const PostItem = () => (
  <S.PostItemLink>
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>31 de Janeiro de 2020 * 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>Diga não ao Medium: tenha sua própria plataforma</S.PostItemTitle>
        <S.PostItemDescription>Algumas razões para voçê ter sua propria plataforma ao invés de
          soluções como o Medium.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem;