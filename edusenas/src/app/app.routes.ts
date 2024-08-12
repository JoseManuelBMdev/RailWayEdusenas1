import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { MenuComponent } from './menu/menu.component';
import { CamaraComponent } from './menu/camara/camara.component';
import { VideojuegoOneComponent } from './videojuego-one/videojuego-one.component';
import { JuegosComponent } from './juegos/juegos.component';
import { MemoramaComponent } from './memorama/memorama.component';
import { FamiliaComponent } from './familia/familia.component';
import {IntegrantesfamiliaComponent } from './integrantesfamilia/integrantesfamilia.component';
import { ColorComponent } from './color/color.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { EjerciciosColorComponent } from './ejercicios-color/ejercicios-color.component';
import { EjerciciosFamiliaComponent } from './ejercicios-familia/ejercicios-familia.component';
import { EjerciciosMesesComponent } from './ejercicios-meses/ejercicios-meses.component';
import { EjerciciosPreguntasComponent } from './ejercicios-preguntas/ejercicios-preguntas.component';
import { EjerciciosAbcsec1Component } from './ejercicios-abcsec1/ejercicios-abcsec1.component';
import { EjerciciosAbcsec2Component } from './ejercicios-abcsec2/ejercicios-abcsec2.component';
import { EjerciciosAbcsec3Component } from './ejercicios-abcsec3/ejercicios-abcsec3.component';
import { EjerciciosAbcsec4Component } from './ejercicios-abcsec4/ejercicios-abcsec4.component';
import { Abcsec1Component } from './abcsec1/abcsec1.component';
import { Abcsec2Component } from './abcsec2/abcsec2.component';
import { Abcsec3Component } from './abcsec3/abcsec3.component';
import { Abcsec4Component } from './abcsec4/abcsec4.component';
import { ColoresComponent } from './colores/colores.component';
import { MesComponent } from './mes/mes.component';
import { MasComponent } from './mas/mas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DiccionarioComponent } from './diccionario/diccionario.component';
import { AdivinalasenaComponent } from './adivinalasena/adivinalasena.component';
import { VideojuegosSaltarComponent } from './videojuegos-saltar/videojuegos-saltar.component';

//alfabeto
import { LetraaComponent } from './Alfabeto/letraa/letraa.component';
import { LetrabComponent } from './Alfabeto/letrab/letrab.component';
import { LetracComponent } from './Alfabeto/letrac/letrac.component';
import { LetradComponent } from './Alfabeto/letrad/letrad.component';
import { LetraeComponent } from './Alfabeto/letrae/letrae.component';
import { LetrafComponent } from './Alfabeto/letraf/letraf.component';
import { LetragComponent } from './Alfabeto/letrag/letrag.component';
import { LetrahComponent } from './Alfabeto/letrah/letrah.component';
import { LetraiComponent } from './Alfabeto/letrai/letrai.component';
import { LetrajComponent } from './Alfabeto/letraj/letraj.component';
import { LetrakComponent } from './Alfabeto/letrak/letrak.component';
import { LetralComponent } from './Alfabeto/letral/letral.component';
import { LetrallComponent } from './Alfabeto/letrall/letrall.component';
import { LetramComponent } from './Alfabeto/letram/letram.component';
import { LetranComponent } from './Alfabeto/letran/letran.component';
import { LetrannComponent } from './Alfabeto/letrann/letrann.component'; // reemplazo de ñ
import { LetraoComponent } from './Alfabeto/letrao/letrao.component';
import { LetrapComponent } from './Alfabeto/letrap/letrap.component';
import { LetraqComponent } from './Alfabeto/letraq/letraq.component';
import { LetrarComponent } from './Alfabeto/letrar/letrar.component';
import { LetrarrComponent } from './Alfabeto/letrarr/letrarr.component';
import { LetrasComponent } from './Alfabeto/letras/letras.component';
import { LetratComponent } from './Alfabeto/letrat/letrat.component';
import { LetrauComponent } from './Alfabeto/letrau/letrau.component';
import { LetravComponent } from './Alfabeto/letrav/letrav.component';
import { LetrawComponent } from './Alfabeto/letraw/letraw.component';
import { LetraxComponent } from './Alfabeto/letrax/letrax.component';
import { LetrayComponent } from './Alfabeto/letray/letray.component';
import { LetrazComponent } from './Alfabeto/letraz/letraz.component';

//familia
import { HermanaComponent } from './familia/hermana/hermana.component';
import { HermanoComponent } from './familia/hermano/hermano.component';
import { HijaComponent } from './familia/hija/hija.component';
import { HijoComponent } from './familia/hijo/hijo.component';
import { MamaComponent } from './familia/mama/mama.component';
import { PapaComponent } from './familia/papa/papa.component';
import { TiaComponent } from './familia/tia/tia.component';
import { TioComponent } from './familia/tio/tio.component';

//cuestionamientos
import { CuandoComponent } from './cuestionamientos/cuando/cuando.component';
import { ComoComponent } from './cuestionamientos/como/como.component';
import { CualComponent } from './cuestionamientos/cual/cual.component';
import { DondeComponent } from './cuestionamientos/donde/donde.component';
import { PorqueComponent } from './cuestionamientos/porque/porque.component';
import { QueEsComponent } from './cuestionamientos/que-es/que-es.component';
import { QuienComponent } from './cuestionamientos/quien/quien.component';

//meses
import { EneroComponent } from './meses/enero/enero.component';
import { FebreroComponent } from './meses/febrero/febrero.component';
import { MarzoComponent } from './meses/marzo/marzo.component';
import { AbrilComponent } from './meses/abril/abril.component';
import { MayoComponent } from './meses/mayo/mayo.component';
import { JunioComponent } from './meses/junio/junio.component';
import { JulioComponent } from './meses/julio/julio.component';
import { AgostoComponent } from './meses/agosto/agosto.component';
import { SeptiembreComponent } from './meses/septiembre/septiembre.component';
import { OctubreComponent } from './meses/octubre/octubre.component';
import { NoviembreComponent } from './meses/noviembre/noviembre.component';
import { DiciembreComponent } from './meses/diciembre/diciembre.component';

//colores
import { AmarilloComponent } from './colores/amarillo/amarillo.component';
import { AzulComponent } from './colores/azul/azul.component';
import { BlancoComponent } from './colores/blanco/blanco.component';
import { GrisComponent } from './colores/gris/gris.component';
import { MoradoComponent } from './colores/morado/morado.component';
import { NaranjaComponent } from './colores/naranja/naranja.component';
import { NegroComponent } from './colores/negro/negro.component';
import { RojoComponent } from './colores/rojo/rojo.component';
import { RosaComponent } from './colores/rosa/rosa.component';
import { VerdeComponent } from './colores/verde/verde.component';
import { ImageComponent } from './image/image.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'integrantesfamilia',component:IntegrantesfamiliaComponent},
    {path:'home', component:HomeComponent},
    {path:'camera', component:CamaraComponent},
    {path:'login', component:LoginComponent},
    {path:'registrer', component:RegistrerComponent},
    {path:'color',component:ColorComponent},
    {path:'meses', component:MesComponent},
    {path:'ejercicios-color',component:EjerciciosColorComponent},
    {path:'preguntas',component:PreguntasComponent},
    {path:'ejercicios-familia',component:EjerciciosFamiliaComponent},
    {path:'ejercicios-preguntas',component:EjerciciosPreguntasComponent},
    {path:'ejercicios-mes',component:EjerciciosMesesComponent},
    {path:'ejercicios-abcseccion1',component:EjerciciosAbcsec1Component},
    {path:'ejercicios-abcseccion2',component:EjerciciosAbcsec2Component},
    {path:'ejercicios-abcseccion3',component:EjerciciosAbcsec3Component},
    {path:'ejercicios-abcseccion4',component:EjerciciosAbcsec4Component},
    {path:'menu', component:MenuComponent},
    {path:'diccionario', component:DiccionarioComponent},
    {path: 'juegos', component:JuegosComponent},
    {path:'perfil',component:PerfilComponent},
    {path:'mas',component:MasComponent},
    //menu botones der
    // {path: 'abecedario', component:AbecedarioComponent},
    {path:'familia', component:FamiliaComponent},
    // {path:'cuestionario', component:CuestionarioComponent},
    {path:'colores',component:ColoresComponent},
    //videojuegos
    {path: 'rompecabezas', component:VideojuegoOneComponent},
    {path: 'memorama', component:MemoramaComponent},
    {path: 'adivinalasena', component:AdivinalasenaComponent},
    {path: 'salto', component:VideojuegosSaltarComponent},
    // Alfabeto con carga perezosa
    // { path: 'Alfabeto', loadChildren: () => import('./Alfabeto/Alfabeto.module').then(m => m.AlfabetoModule) }
    {path:'abcseccion1', component:Abcsec1Component},
    {path:'abcseccion2', component:Abcsec2Component},
    {path:'abcseccion3', component:Abcsec3Component},
    {path:'abcseccion4', component:Abcsec4Component},
    { path: 'a', component: LetraaComponent },
    { path: 'b', component: LetrabComponent },
    { path: 'c', component: LetracComponent },
    { path: 'd', component: LetradComponent },
    { path: 'e', component: LetraeComponent },
    { path: 'f', component: LetrafComponent },
    { path: 'g', component: LetragComponent },
    { path: 'h', component: LetrahComponent },
    { path: 'i', component: LetraiComponent },
    { path: 'j', component: LetrajComponent },
    { path: 'k', component: LetrakComponent },
    { path: 'l', component: LetralComponent },
    { path: 'll', component: LetrallComponent },
    { path: 'm', component: LetramComponent },
    { path: 'n', component: LetranComponent },
    { path: 'nn', component: LetrannComponent }, // reemplazo de ñ
    { path: 'o', component: LetraoComponent },
    { path: 'p', component: LetrapComponent },
    { path: 'q', component: LetraqComponent },
    { path: 'r', component: LetrarComponent },
    { path: 'rr', component: LetrarrComponent },
    { path: 's', component: LetrasComponent },
    { path: 't', component: LetratComponent },
    { path: 'u', component: LetrauComponent },
    { path: 'v', component: LetravComponent },
    { path: 'w', component: LetrawComponent },
    { path: 'x', component: LetraxComponent },
    { path: 'y', component: LetrayComponent },
    { path: 'z', component: LetrazComponent },

    //familia
    { path: 'hermana', component: HermanaComponent},
    { path: 'hermano', component: HermanoComponent},
    { path: 'hija', component: HijaComponent},
    { path: 'hijo', component: HijoComponent},
    { path: 'mama', component: MamaComponent},
    { path: 'papa', component: PapaComponent},
    { path: 'tia', component: TiaComponent},
    { path: 'tio', component: TioComponent},

    //cuestionamientos
    {path:'cuando',component:CuandoComponent},
    {path:'cual',component:CualComponent},
    {path:'como',component:ComoComponent},
    {path:'cuando',component:CuandoComponent},
    {path:'quees',component:QueEsComponent},
    {path:'quien',component:QuienComponent},
    {path:'donde',component:DondeComponent},
    {path:'porque',component:PorqueComponent},

    //meses
    {path: 'enero', component:EneroComponent},
    {path: 'febrero', component:FebreroComponent},
    {path: 'marzo', component: MarzoComponent},
    {path: 'abril', component: AbrilComponent},
    {path: 'mayo', component: MayoComponent},
    {path: 'junio', component: JunioComponent},
    {path: 'julio', component: JulioComponent},
    {path: 'agosto', component: AgostoComponent},
    {path: 'septiembre', component: SeptiembreComponent},
    {path: 'octubre', component: OctubreComponent},
    {path: 'noviembre', component: NoviembreComponent},
    {path: 'diciembre', component: DiciembreComponent},

    //colores
    {path: 'amarillo', component: AmarilloComponent},
    {path: 'azul', component: AzulComponent},
    {path: 'blanco', component: BlancoComponent},
    {path: 'gris', component: GrisComponent},
    {path: 'morado', component: MoradoComponent},
    {path: 'naranja', component: NaranjaComponent},
    {path: 'negro', component: NegroComponent},
    {path: 'rojo', component: RojoComponent},
    {path: 'rosa', component: RosaComponent},
    {path: 'verde', component: VerdeComponent},




];
