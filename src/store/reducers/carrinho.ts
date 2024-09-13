import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  itensFavoritados: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  itensFavoritados: []
}

const carrinhoSlice = createSlice({
  name: ' carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (
        state.itens.find((produtoPossivel) => produtoPossivel.id === produto.id)
      ) {
        alert('item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itensFavoritados.find((p) => p.id === produto.id)) {
        state.itensFavoritados = state.itensFavoritados.filter(
          (p) => p.id !== produto.id
        )
      } else {
        state.itensFavoritados.push(produto)
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
