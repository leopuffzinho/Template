import { Card, CardActions, CardContent, CardMedia, Typography, Button, Link, Grid } from "@mui/material"

function Produto(props) {
  return (
    <Grid item lg={3} md={5} xs={12} >
    <Card sx={{minHeight: "500px", maxHeight: "700px", boxShadow: "2px 2px 9px grey", borderRadius: "7px"}} key={props.key}>
        <CardMedia 
            sx={{ height: 200 }} 
            image={props.imagem} 
            title={props.titulo}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div"> 
                {props.titulo}
            </Typography>
           
            <Typography variant="body2" color="text.secondary">
                {props.descricao}
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
    </Grid>
  )
}

export default Produto