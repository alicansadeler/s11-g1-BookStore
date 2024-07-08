import React from 'react';

import { beforeEach, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import 'mutationobserver-shim';

import App from '../App';

import { BrowserRouter } from 'react-router-dom';
import fs from 'fs';
import path from 'path';

const isCartContextFileExists = fs.existsSync(
  path.resolve(__dirname, '../contexts/CartContext.jsx'),
  'utf8'
);

const cartContextFile = isCartContextFileExists
  ? fs
      .readFileSync(
        path.resolve(__dirname, '../contexts/CartContext.jsx'),
        'utf8'
      )
      .replaceAll(/(?:\r\n|\r|\n| )/g, '')
  : '';

const isProductContextFileExists = fs.existsSync(
  path.resolve(__dirname, '../contexts/ProductContext.jsx'),
  'utf8'
);

const productContextFile = isCartContextFileExists
  ? fs
      .readFileSync(
        path.resolve(__dirname, '../contexts/ProductContext.jsx'),
        'utf8'
      )
      .replaceAll(/(?:\r\n|\r|\n| )/g, '')
  : '';

const appFile = fs
  .readFileSync(path.resolve(__dirname, '../App.jsx'), 'utf8')
  .replaceAll(/(?:\r\n|\r|\n| )/g, '');

beforeEach(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

test('contexts klasöründe CartContext.Provider oluşturulmuş', () => {
  expect(isCartContextFileExists).toBe(true);
});

test('CartContext.jsx dosyasında createContext() ile context oluşturulmuş', () => {
  expect(cartContextFile).toContain('createContext()');
});

test('CartContext.jsx dosyasında CartContext.Provider tanımlanmış', () => {
  expect(cartContextFile).toContain('CartContext.Provider');
});

test('contexts klasöründe CartContext Providera valuelar aktarılmış', () => {
  expect(cartContextFile).toContain('<CartContext.Providervalue={');
});

test('contexts klasöründe ProductContext.jsx dosyası oluşturulmuş', () => {
  expect(isProductContextFileExists).toBe(true);
});

test('CartContext.jsx dosyasında createContext() ile context oluşturulmuş', () => {
  expect(productContextFile).toContain('createContext()');
});

test('CartContext.jsx dosyasında CartContext.Provider tanımlanmış', () => {
  expect(productContextFile).toContain('ProductContext.Provider');
});

test('contexts klasöründe CartContext Providera valuelar aktarılmış', () => {
  expect(productContextFile).toContain('<ProductContext.Providervalue={');
});

test('App.jsxde oluşturulan her 2 provider da kullanılmış', () => {
  expect(appFile).toContain('Provider>');
  expect(appFile.split('Provider>')).toHaveLength(5);
});

test('App.jsxde useStateler (import ve tanımlamalar) silinmiş', () => {
  expect(appFile).not.toContain('useState');
});

test('App.jsxde Products componentine gönderilen proplar (products, addItem) silinmiş', () => {
  expect(appFile).toContain('<Products/>');
});

test('App.jsxde Navigation componentine gönderilen prop (cart) silinmiş', () => {
  expect(appFile).toContain('<Navigation/>');
});

test('App.jsxde ShoppingCart componentine gönderilen prop (cart) silinmiş', () => {
  expect(appFile).toContain('<ShoppingCart/>');
});

test('contextAPI eklendikten sonra ana sayfa 4 kitabı da geririyor.', async () => {
  const user = userEvent.setup();
  expect(appFile).toContain('Provider>');
  expect(screen.getAllByText('Add to cart')).toHaveLength(4);
});

test('İlk kitapta Add to cart butonuna tıklanınca sağ üst cartta 1 yazıyor', async () => {
  const user = userEvent.setup();
  await user.click(screen.getAllByText('Add to cart')[0]);
  await screen.findByText('1');
});

test('İkinci kitapta Add to cart butonuna tıklanınca sağ üst cartta 2 yazıyor', async () => {
  const user = userEvent.setup();
  await user.click(screen.getAllByText('Add to cart')[1]);
  await screen.findByText('2');
});

test('İlk kitapta Add to cart butonuna tıklanınca sepete ekliyor', async () => {
  const user = userEvent.setup();
  await user.click(screen.getAllByText('Add to cart')[0]);
  await user.click(screen.getByText('Cart'));
  expect(await screen.findAllByText('The Art Of War')).toHaveLength(2);
});

test('Cart sayfasında Remove from cart kitabı sepetten çıkarıyor', async () => {
  const user = userEvent.setup();
  await user.click(screen.getByText('Cart'));
  await user.click(screen.getAllByText('Remove from cart')[0]);
  expect(await screen.findAllByText('The Art Of War')).toHaveLength(1);
});

test('Cart bilgisi localStoragea s11g1 keyi ile saklanıyor', async () => {
  const data = localStorage.getItem('s11g1');
  expect(data).not.toBe(null);
});

test('Cart bilgisi localStorageda güncelleniyor', async () => {
  localStorage.clear('s11g1');
  const user = userEvent.setup();
  await user.click(screen.getByText('Products'));
  await user.click(screen.getAllByText('Add to cart')[0]);
  await user.click(screen.getByText('Cart'));
  const data = localStorage.getItem('s11g1');
  expect(data).not.toBe(null);
});
