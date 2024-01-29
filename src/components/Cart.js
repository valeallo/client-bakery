import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { toggle } from "../redux/reducers/uiSlice";
import { increament, decrement, clear } from "../redux/reducers/cartSlice";
import { cartTotalPriceSelector } from "../redux/selectors";


const fade = keyframes`
  from {
    opacity:0
  }

  to {
    opacity:1
  }
`;
const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 300px;
  height: 100vh;
  padding: 90px 12px 0;
  background: #fff;
  overflow: auto;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${(p) => (p.visible ? 0 : "300px")});
`;



export const CartClearButton = styled.button`
  padding: 8px 12px;
  color: #fff;
  background-color: #dc6262;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  user-select: none;
  width: 100%;
  margin: 16px 0;
  &:hover {
    background: #f25807;
  }
`;
const CartItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 16px 0;
  border-bottom: 1px solid #ededed;
`;
const CartProductImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 8px;
  border: 1px solid #f6f6f6;
`;
const CartProductTitle = styled.div`
  font-size: 16px;
`;
const CartProductAction = styled.div`
  display: grid;
  grid-template-columns: 30px 40px 30px;
  grid-template-rows: 40px;
  align-items: center;
  padding: 8px 0 0;
  text-align: center;
`;
const CartProductSubtotal = styled.div`
  margin-top: 4px;
  color: #666;
`;
const ActionButton = styled.button`

  color: #fff;
  background-color: #dc6262;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  user-select: none;
  width: 100%;
  margin: 16px 0;
  &:hover {
    background: #f25807;
  }
`;
const CartProductQuantity = styled.div`
  height: 30px;
  line-height: 30px;
`;
const CartTotal = styled.div`
  padding: 16px 0;
  font-size: 20px;
  text-align: right;
  color: #dc6262;
`;
const Mask = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);

  animation: ${fade} 0.2s ease-in-out;
`;

const EmptyCart = styled.div`
  padding: 16px;
  color: #888;
  text-align: center;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);

  return (
    <>
      <CartContainer visible={ui.cartDrawerVisible} >
        {cart.length > 0 ? (
          <CartClearButton
            onClick={() => {
              dispatch(clear());
            }}
          >
            cart
          </CartClearButton>
        ) : (
          <EmptyCart>The cart is empty</EmptyCart>
        )}
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id}>
            <CartProductImage src={cartItem.imageUrl} alt={cartItem.name} />
            <div>
              <CartProductTitle>{cartItem.name}</CartProductTitle>
              <CartProductSubtotal>
                 {cartItem.quantity * cartItem.price + "€"}
              </CartProductSubtotal>
              <CartProductAction>
                <ActionButton
                  disabled={cartItem.quantity === 1}
                  onClick={() => {
                    dispatch(decrement(cartItem._id));
                  }}
                >
                  -
                </ActionButton>
                <CartProductQuantity>{cartItem.quantity}</CartProductQuantity>
                <ActionButton
                  onClick={() => {
                    dispatch(increament(cartItem._id));
                  }}
                >
                  +
                </ActionButton>
              </CartProductAction>
            </div>
          </CartItem>
        ))}
        {totalPrice > 0 && <CartTotal>{totalPrice}€</CartTotal>}
      </CartContainer>
      {ui.cartDrawerVisible && (
        <Mask
          onClick={() => {
            dispatch(toggle());
          }}
        />
      )}
    </>
  );
};

export default Cart;
