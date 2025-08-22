# 🤘🏻 ITRock Marketplace Challenge 🤘🏻

App de marketplace desarrollada con React Native y Expo.

## DEMO
**Demo iOS** --> [Haz clic aquí para ver el video](https://www.youtube.com/shorts/1_-ruR5fJfY?feature=share)

## Requisitos

- Node.js v24.1.0
- React Native 0.79.5
- Expo CLI

## Instalación

```bash
npm install
npx expo prebuild
```

## Ejecución

### iOS

```bash
npm run ios
```

### Android

```bash
npm run android
```

## Credenciales de prueba

**Login:**

- Usuario: `admin`
- Contraseña: `itrock123`

**Tarjeta de crédito:**

- Número: `4242 4242 4242 4242`
- Vencimiento: `12/28`
- CVC: `123`

## Decisiones técnicas

- **Estado:** React Context + hooks
- **Estilos:** StyleSheet nativo
- **Data fetching:** React Query para cache y estados
- **Feed:** Mock local (`src/data/feedData.ts`)
- **Productos:** Fake Store API
- **Navegación:** React Navigation (Stack + Bottom Tabs)

## Funcionalidades

- Login con persistencia de sesión
- Feed de comentarios con pull-to-refresh
- Productos con pull-to-refresh
- Lista de productos con compra directa
- Checkout simulado con validación de tarjeta
- Estados de loading, error y vacío en ambos casos

## Limitaciones

- Datos de feed son estáticos (mock local)
- Validación de login hardcodeada
- Datos importantes en carpeta constants y no en archivo .env
- Checkout simulado (no integración real de pagos)
- Sin paginación en feed (implementable con useInfiniteQuery)
