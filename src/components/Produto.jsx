import { Card, CardActions, CardContent, CardMedia, Typography, Button, Link } from "@mui/material"

function Produto(props) {
  return (
    <Card sx={{ maxWidth: 350, boxShadow: "2px 2px 9px grey" }} key={props.key}>
        <CardMedia 
            sx={{ height: 200 }}
            image={props.imagem} 
            title={props.titulo}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div"> 
                {props.titulo}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
                {props.descricao}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary" sx={{ height: "20px" }}>
                {props.categoria}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary" sx={{ height: "20px" }}>
                {props.ano}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary" sx={{ height: "20px" }}>
                {props.duracao}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="large">
                <Link style={{textDecoration: "none"}} href={ "editar/produto/" + props.id }>Editar</Link>
            </Button>
            <Button size="large">
                <Link style={{textDecoration: "none"}} href="#" onClick={props.excluir}>Excluir</Link>
            </Button>
        </CardActions>
    </Card>
  )
}

export default Produto