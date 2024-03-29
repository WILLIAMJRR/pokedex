import { setNameTrainer } from '../store/slices/TrainerName.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import videopokemon from '../video/Pokemon Ash_Satoshi Campeón Mundial Latino EDIT (1080p_30fps_H264-128kbit_AAC).mp4';
import homecss from './style/home.css';
import pokelogo from '../img/International_Pokémon_logo.svg.png';
//paso 7
const Home = () => {
  //paso 7.4
  const dispatch = useDispatch();
  //paso 8.4 genera un navegador nos ayuda a nevegar
  const navigate = useNavigate();

  //7.2
  const handleSubmit = (e) => {
    //7.3
    e.preventDefault();

    //paso 7.5  se despacha la action con dispatch se trae el setNametrainer como estado global del trauinerName
    dispatch(setNameTrainer(e.target.name.value.trim())); //es mejor capturarlo por el id

    //7.6 resetear
    e.target.name.value = '';

    //8.5despues que coloquemos el nombre nos manda a la pagina pokedex
    navigate('/pokedex');
  };

  return (
    <div id='container_home'>
      <div className='home_img_con'>
        <img className='home_img' src={pokelogo} alt='' />
      </div>

      <video className='home_video' autoPlay loop muted playsInline>
        <source src={videopokemon} type='video/mp4' />
      </video>

      <div className='capa'></div>
      <div className='home_title'>
        <h2>Hi Trainer</h2>
        <p>To start this pokedex ,give me your name</p>
      </div>
      {/* paso 7.1 */}
      <form className='home_form' onSubmit={handleSubmit} action=''>
        <div>
          <input
            className='home_input'
            id='name'
            type='text'
            autoComplete='off'
            required
          />
        </div>
        <button className='home_btn'>
          <i className='fa-solid fa-magnifying-glass-arrow-right fa-2x'></i>
        </button>
      </form>
    </div>
  );
};

export default Home;
