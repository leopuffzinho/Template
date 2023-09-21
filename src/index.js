import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#121517',
      dark: 'rgb(35, 32, 33)',
      contrastText: '#fbf9f9',
      light: 'rgb(230, 233, 237)',
    },
    secondary: {
      main: '#E0E4E9',
      contrastText: '#000000',
      dark: '#312B30',
      light: '#332E2F',
    },
    error: {
      main: '#111111',
      light: '#d23b3b',
    },
    warning: {
      main: '#111111',
      light: '#e4821e',
    },
    info: {
      main: '#111111',
      light: '#297aad',
    },
    success: {
      main: '#040404',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    divider: 'rgba(0,0,0,0.12)',
    text: {
      hint: '#000000',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
