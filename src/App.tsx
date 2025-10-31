/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';

export interface ItemRosco {
  letra: letras;
  label: string;
  definicion: string;
} 

export enum letras {
  a = 'a',
  b = 'b',
  c = 'c',
  d = 'd',
  e = 'e',
  f = 'f',
  g = 'g',
  h = 'h',
  i = 'i',
  j = 'j',
  l = 'l',
  m = 'm',
  n = 'n',
  ñ = 'ñ',
  o = 'o',
  p = 'p',
  q = 'q',
  r = 'r',
  s = 's',
  t = 't',
  u = 'u',
  v = 'v',
  x = 'x',
  y = 'y',
  z = 'z',
} 

export type TFormValue = {
  value: string;
  letra: string;
  respuestas: string[];
  state: "pendiente" | 'correcto' | 'incorrecto';
  puntaje: number;
};

export type TDefincionesFormValues = {
  a: TFormValue;
  b: TFormValue;
  c: TFormValue;
  d: TFormValue;
  e: TFormValue;
  f: TFormValue;
  g: TFormValue;
  h: TFormValue;
  i: TFormValue;
  j: TFormValue;
  l: TFormValue;
  m: TFormValue;
  n: TFormValue;
  ñ: TFormValue;
  o: TFormValue;
  p: TFormValue;
  q: TFormValue;
  r: TFormValue;
  s: TFormValue;
  t: TFormValue;
  u: TFormValue;
  v: TFormValue;
  x: TFormValue;
  y: TFormValue;
  z: TFormValue;
};

const definiciones: ItemRosco[] = [
  {
    letra: letras.a,
    label: 'Empieza con A',
    definicion: 'Dicho de una persona, especialmente un autor: De nombre desconocido o que se oculta. Usado tambien como sustantivo masculino.',
  },
  {
    letra: letras.b,
    label: 'Empieza con B',
    definicion: 'Pieza pequeña de chocolate, que en su interior puede contener licor, crema u otro relleno.',
  },
  {
    letra: letras.c,
    label: 'Empieza con C',
    definicion: 'Idea a la que se llega después de considerar una serie de datos o circunstancias.',
  },
  {
    letra: letras.d,
    label: 'Empieza con D',
    definicion: 'Ocultar o encubrir con astucia lo que se piensa o siente.',
  },
  {
    letra: letras.e,
    label: 'Empieza con E',
    definicion: 'Poco costoso, que exige poco gasto.',
  },
  {
    letra: letras.f,
    label: 'Empieza con F',
    definicion: 'Medicamento elaborado con una molécula específica.',
  },
  {
    letra: letras.g,
    label: 'Empieza con G',
    definicion: 'Natural de Guatemala, país de América, o de su capital.',
  },
  {
    letra: letras.h,
    label: 'Empieza con H',
    definicion: 'Acto o serie de actos que se celebran en honor de alguien o de algo.',
  },
  {
    letra: letras.i,
    label: 'Empieza con I',
    definicion: 'Estímulo que se ofrece a una persona, grupo o sector de la economía con el fin de elevar la producción y mejorar los rendimientos.',
  },
  {
    letra: letras.j,
    label: 'Empieza con J',
    definicion: 'Período de la vida humana que precede inmediatamente a la madurez.',
  },

  {
    letra: letras.l,
    label: 'Empieza con L',
    definicion: 'Perteneciente o relativo al juego.',
  },

  {
    letra: letras.m,
    label: 'Empieza con M',
    definicion: 'Lección o enseñanza que se deduce de un cuento, fábula, ejemplo, anécdota, etcétera.',
  },{
    letra: letras.n,
    label: 'Empieza con N',
    definicion: 'No hacer caso de alguien, no tomarlo en consideración. Menospreciar a alguien.',
  },{
    letra: letras.ñ,
    label: 'Contiene la Ñ',
    definicion: 'Deseo vehemente de hacer o conseguir algo.',
  },{
    letra: letras.o,
    label: 'Empieza con O',
    definicion: 'Impedimento, dificultad, inconveniente.',
  },{
    letra: letras.p,
    label: 'Empieza con P',
    definicion: 'Sumamente atento, preocupado por algo que se espera o sucede.',
  },{
    letra: letras.q,
    label: 'Contiene la Q',
    definicion: 'Situación de un cuerpo que, a pesar de tener poca base de sustentación, se mantiene sin caerse.',
  },{
    letra: letras.r,
    label: 'Empieza con R',
    definicion: 'Efecto y consecuencia de un hecho, operación o deliberación.',
  },{
    letra: letras.s,
    label: 'Empieza con S',
    definicion: 'Estado en que el ser orgánico ejerce normalmente todas sus funciones.',
  },
  {
    letra: letras.t,
    label: 'Empieza con T',
    definicion: 'Persona que posee los conocimientos especiales de una ciencia o arte.',
  },{
    letra: letras.u,
    label: 'Contiene la U',
    definicion: 'Dicho especialmente del lenguaje: Que puede entenderse de varios modos o admitir distintas interpretaciones y dar, por consiguiente, motivo a dudas, incertidumbre o confusión.',
  },{
    letra: letras.v,
    label: 'Empieza con V',
    definicion: 'Inclinación a un estado, una profesión o una carrera.',
  },{
    letra: letras.x,
    label: 'Contiene la X',
    definicion: 'Cosa que se aparta de la regla o condición general de las demás de su especie.',
  },{
    letra: letras.y,
    label: 'Contiene la Y',
    definicion: 'Dicho de una persona: Que hace reír con sus dichos o gestos. Usado también como sustantivo Usado también en sentido peyorativo.',
  },{
    letra: letras.z,
    label: 'Contiene la Z',
    definicion: 'Triunfo o suceso afortunado y sorprendente.',
  },
]

const initalFormValues:TDefincionesFormValues  = {
  a: {
    value: '',
    letra: 'a',
    respuestas: ['anónimo', 'anonimo', 'anònimo', 'anonima', 'anónima', 'anònima'],
    state: 'pendiente',
    puntaje: 0
  },
  b: {
    value: '',
    letra: 'b',
    respuestas: ['bombón', 'bombon'],
    state: 'pendiente',
    puntaje: 0
  },
  c: {
    value: '',
    letra: 'c',
    respuestas: ['conclusión', 'conclusion'],
    state: 'pendiente',
    puntaje: 0
  },
  d: {
    value: '',
    letra: 'd',
    respuestas: ['disimular'],
    state: 'pendiente',
    puntaje: 0
  },
  e: {
    value: '',
    letra: 'e',
    respuestas: ['económico', 'economico'],
    state: 'pendiente',
    puntaje: 0
  },
  f: {
    value: '',
    letra: 'f',
    respuestas: ['fármaco', 'farmaco'],
    state: 'pendiente',
    puntaje: 0
  },
  g: {
    value: '',
    letra: 'g',
    respuestas: ['guatemalteco', 'guatemalteca'],
    state: 'pendiente',
    puntaje: 0
  },
  h: {
    value: '',
    letra: 'h',
    respuestas: ['homenaje'],
    state: 'pendiente',
    puntaje: 0
  },
  i: {
    value: '',
    letra: 'i',
    respuestas: ['incentivo'],
    state: 'pendiente',
    puntaje: 0
  },
  j: {
    value: '',
    letra: 'j',
    respuestas: ['juventud'],
    state: 'pendiente',
    puntaje: 0
  },
  l: {
    value: '',
    letra: 'l',
    respuestas: ['lúdico', 'ludico'],
    state: 'pendiente',
    puntaje: 0
  },
  m: {
    value: '',
    letra: 'm',
    respuestas: ['moraleja'],
    state: 'pendiente',
    puntaje: 0
  },
  n: {
    value: '',
    letra: 'n',
    respuestas: ['ningunear'],
    state: 'pendiente',
    puntaje: 0
  },
  ñ: {
    value: '',
    letra: 'ñ',
    respuestas: ['empeño'],
    state: 'pendiente',
    puntaje: 0
  },
  o: {
    value: '',
    letra: 'o',
    respuestas: ['obstáculo', 'obstaculo'],
    state: 'pendiente',
    puntaje: 0
  },
  p: {
    value: '',
    letra: 'p',
    respuestas: ['pendiente'],
    state: 'pendiente',
    puntaje: 0
  },
  q: {
    value: '',
    letra: 'q',
    respuestas: ['equilibrio'],
    state: 'pendiente',
    puntaje: 0
  },
  r: {
    value: '',
    letra: 'r',
    respuestas: ['resultado'],
    state: 'pendiente',
    puntaje: 0
  },
  s: {
    value: '',
    letra: 's',
    respuestas: ['salud'],
    state: 'pendiente',
    puntaje: 0
  },
  t: {
    value: '',
    letra: 't',
    respuestas: ['técnico', 'tecnico', 'técnica', 'tecnica'],
    state: 'pendiente',
    puntaje: 0
  },
  u: {
    value: '',
    letra: 'u',
    respuestas: ['ambiguo'],
    state: 'pendiente',
    puntaje: 0
  },
  v: {
    value: '',
    letra: 'v',
    respuestas: ['vocación', 'vocacion'],
    state: 'pendiente',
    puntaje: 0
  },
  x: {
    value: '',
    letra: 'x',
    respuestas: ['excepción', 'excepcion'],
    state: 'pendiente',
    puntaje: 0
  },
  y: {
    value: '',
    letra: 'y',
    respuestas: ['payaso'],
    state: 'pendiente',
    puntaje: 0
  },
  z: {
    value: '',
    letra: 'z',
    respuestas: ['batacazo'],
    state: 'pendiente',
    puntaje: 0
  },
}

export function useIsMobile (){
  return useMediaQuery({ query: `(max-width: 1199px)` });
}

function App() {

  const segundosPorLetra = 10;
  const segundosDePausa = 30;

  const [iniciado, setIniciado] = useState(false)
  const [formValues, setFormValues] = useState<TDefincionesFormValues>(initalFormValues)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentItem, setCurrentItem] = useState<ItemRosco>(definiciones[0])
  const [ronda, setRonda] = useState<number>(1)
  const [pausa, setPausa] = useState<boolean>(false)
  const [puntajeTotal, setPuntajeTotal] = useState<number>(0)
  const [completado, setCompletado] = useState<boolean>(false)
  const [contador, setContador] = useState<number>(segundosPorLetra)
  const [contadorPausa, setContadorPausa] = useState<number>(segundosDePausa)
  const [filtrados, setFiltrados] = useState<ItemRosco[]>(definiciones)
  const [mensajeTableFiltrada, setMensajeTableFiltrada] = useState<string>('')

  const isMobile = useIsMobile();

  useEffect(() => {
    iniciado && setTimeout(() => {
      if(contador > 1){
        setContador(contador-1)
      } else {
        if(currentIndex === definiciones.length - 1){
          ronda !==3 && setPausa(true)
          setRonda(ronda+1)
        }else{
          setContador(segundosPorLetra)
          setCurrentIndex(currentIndex+1)
          setCurrentItem(definiciones[currentIndex+1])
        }
      }
    }, 1000);
    
  }, [iniciado, contador])

  useEffect(() => {
    pausa && setTimeout(() => {
      if(contadorPausa > 1){
        setContadorPausa(contadorPausa-1)
      }else{
        setPausa(false)
        setContadorPausa(segundosDePausa)
        setCurrentIndex(0) 
        setContador(segundosPorLetra)
        setCurrentItem(definiciones[0])
      }
    }, 1000);
  }, [pausa, contadorPausa])

  useEffect(() => {
    if(ronda===4){
      const hayIncorrectas = definiciones.some((def => formValues[def.letra].state === 'incorrecto' || formValues[def.letra].state === 'pendiente'))
      setCompletado(!hayIncorrectas)
    }
  }, [ronda])


  const iniciarJuego = () => {
    setIniciado(true)
  }

  const handleChange = (value: string,  letra: letras) => {
    setFormValues({...formValues, [letra]: { ...formValues[letra], value}})
  }

  const enviarRespuesta = (letra: letras) => {
    const value = formValues[letra].value.trim().toLowerCase();
    const respuestas = formValues[letra].respuestas;
    const esCorrecto = respuestas?.includes(value)

    const puntaje = ronda === 1 ? 3 : ronda === 2 ? 2 : 1

    const updateRta:TFormValue = {
      ...formValues[letra],
      state: esCorrecto ? 'correcto' : 'incorrecto',
      puntaje: esCorrecto ? puntaje : 0,
    }

    esCorrecto && setPuntajeTotal(puntajeTotal + puntaje)
    setFormValues({...formValues, [letra]: updateRta})
  }

  const filtrar = (filtro:string) => {
    if(filtro === 'todas') return setFiltrados([...definiciones])

    let arrayFiltrado:ItemRosco[] = []
    definiciones.forEach(def => {
      formValues[def.letra].state === filtro && arrayFiltrado.push({...def})
    })
    setFiltrados(arrayFiltrado)
    
    switch (filtro) {
      case 'correcto':
        setMensajeTableFiltrada('No tenés ninguna respuesta correcta')
        break;
      case 'incorrecto':
        setMensajeTableFiltrada('No tenés ninguna respuesta incorrecta')
        break;
      case 'pendiente':
        setMensajeTableFiltrada('No tenés ninguna respuesta pendiente')
        break;
      default:
        setMensajeTableFiltrada('')
        break;
    }
  }

  return (
    <div className={`flex flex-col ${isMobile ? (pausa ? 'gap-36 m-24' : 'gap-24 m-24') : 'gap-48 m-60'}`}>
      {!iniciado ? (
        <div className={`flex flex-col items-center ${isMobile ? 'gap-16' : 'gap-24'}`}>
          <h1>Shabbaton Colel Ereb 2025</h1>
          <div className={`flex flex-col text-center gap-8 ${isMobile ? '' : 'font-size-20'}`}>
            <p>Aparecerán definiciones y deberás encontrar la palabra exacta a la cual se refiere según la letra que corresponda.</p>
            <p>Prestá atención a la consigna, en algunos casos buscamos la palabra que comience con esa letra y en otros que solo la contengan.</p>
            <p>Por cada palabra tendrás 10 segundos para responder, pero tené en cuenta que tendrás la posibilidad de responder en otras rondas.</p>
            <p>Tendrás tres rondas para ir respondiendo, eso te permitirá pensarlo y asi no tener que arriesgar sin saber.</p>
            <p>Si respondés correctamente en la primera ronda obtendrás 3 puntos, mientras que si lo hacés en la segunda 2, y un punto en la tercera y última ronda.</p>
            <p>Tené en cuenta que si respondés de manera incorrecta ya no tendrás otra oportunidad para esa palabara.</p>
            <p>La respuesta incorrecta no resta puntos, si estás en la última ronda, arriesgate!</p>
            <p>Entre cada ronda tendrás 30 segundos para repasar de memoria y pensar en las palabras que no has podido responder.</p>
            <p>Además tendrás esos 10 segundos por letra, si ya la respondiste usalos para pensar.</p>
            <p>Sean estrategas y pongan incapié en recordar las definiciones para que el tiempo de pensar sea útil.</p>
            <p>Prestá atención en escribirla correctamente ya que sino no será tomada como correcta.</p>
            <p>Si completás todas correctas sin importar en que ronda, sumás 10 puntos extras!</p>
          </div>
          <button type="button" className={`btn btn-primary ${isMobile ? 'w-full font-size-20' : 'p-24 font-size-36'}`} onClick={iniciarJuego}>Iniciar Juego</button>
        </div>
      ) : (
        <>
          <div className='flex flex-col items-center gap-24'>
            {!pausa && ronda!==4 && <h2>Jugando la {ronda}° ronda</h2>}
            {<div className={`flex justify-center margin-auto wrap ${isMobile ? 'max-width-400 gap-8' : 'gap-12 max-width-950'}`}>
              {definiciones.map((def) => (
                <div 
                className={`item-letra text-center  ${isMobile ? 'width-30 font-size-18' : 'width-50 font-size-24 p-8'}
                  ${formValues[def.letra].state === 'correcto' ? 'letra-correcta' 
                    : formValues[def.letra].state === 'incorrecto' ? 'letra-incorrecta' 
                    : 'letra-pendiente'} 
                    ${currentItem.letra === def.letra && ronda !== 4 && !pausa && 'letra-actual'}
                    `}
                    >
                  {def.letra.toLocaleUpperCase()}
                </div>
              ))}
            </div>}
          </div>

          {pausa ? ( 
            <>
              <div className={`flex flex-col justify-center items-center gap-8 h-full ${isMobile ? 'font-size-24 text-center' : 'font-size-36'}`}>
                <h3>Tiempo para pensar!</h3>
                {
                  ronda === 2 ? (
                    <h3>Preparense para la segunda ronda!</h3>
                  ) : (
                    <h3>Preparense para la tercera y última ronda!</h3>
                  )
                }
                <h5>Charlá con tu compañero y repasen las definiciones que no pudieron responder</h5>
              </div>
              <div className={`flex justify-center ${isMobile ? 'flex-col gap-36 items-center' : 'gap-60 margin-auto'}`}>
                <div className={`contador-container ${isMobile ? 'p-12 min-width-80' : 'p-36 min-width-220'}`}>
                  <p className={`${isMobile ? 'font-size-36' :'font-size-80'}`}>{contadorPausa}</p>
                </div>
                <div className={`puntaje-container flex flex-col justify-center items-center w-full text-center gap-4 ${isMobile ? 'font-size-36' : 'font-size-48'}`}>
                  <p className=''>Puntaje parcial</p>
                  <p className=''>{puntajeTotal}</p>
                </div>
              </div>
              
            </>
          ) : ronda === 4 ? (
            <>
              <div className='flex flex-col justify-center items-center gap-36'>
                <div className='flex flex-col text-center'>
                  <div className={`flex gap-24 weight-600 color-success ${isMobile ? 'font-size-24' : 'font-size-72'}`}>
                    <p>Puntos Finales: </p>
                    <p>{completado ? puntajeTotal+10 : puntajeTotal}</p>
                  </div>
                  {completado && <div className={`color-success ${isMobile ? 'font-size-12' : 'font-size-24'}`}>Sumaste 10 puntos extras por completarlo</div>}
                </div>
                {isMobile ? (
                  <div className='flex flex-col gap-24'>
                    <div className='flex margin-auto max-width-250 justify-center gap-4 flex-wrap'>
                      <button onClick={() => filtrar('todas')} className='btn btn-primary'>Todas</button>
                      <button onClick={() => filtrar('pendiente')} className='btn btn-warning'>Sin responder</button>
                      <button onClick={() => filtrar('correcto')} className='btn btn-success'>Correctas</button>
                      <button onClick={() => filtrar('incorrecto')} className='btn btn-danger'>Incorrectas</button>
                    </div>
                    {filtrados.length > 0 ? (
                      <div className={`flex flex-col gap-12 justify-center items-center `}>
                        {filtrados.map(item => (
                          <div className={`container-card-mobile font-size-18  w-full
                            ${formValues[item.letra].state === 'correcto' ? 'card-mobile-correcto' 
                            : formValues[item.letra].state === 'incorrecto' ? 'card-mobile-incorrecto' : 'card-mobile-pendiente'}`} >
                            <p>{item.label}</p>
                            <p className='font-size-20 max-width-500 weight-600'>{item.definicion}</p>
                            <p>Respuesta Correcta: <span className='weight-600 font-size-20'>{formValues[item.letra].respuestas[0].toUpperCase()}</span></p>
                            <p>{formValues[item.letra].state === 'pendiente' ? 'Sin Responder' : `Tu respuesta: ${formValues[item.letra].value}` }</p>
                            <p>Puntos obtenidos: {formValues[item.letra].puntaje}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className='w-full font-size-24 text-center'>
                        <p>{mensajeTableFiltrada}</p>
                      </div>
                    ) } 
                  </div>
                ) : ( 
                  <div className='flex flex-col gap-24 w-full'>
                    <div className='flex w-full justify-start gap-36'>
                      <button onClick={() => filtrar('todas')} className='btn btn-primary'>Todas</button>
                      <button onClick={() => filtrar('correcto')} className='btn btn-success'>Correctas</button>
                      <button onClick={() => filtrar('incorrecto')} className='btn btn-danger'>Incorrectas</button>
                      <button onClick={() => filtrar('pendiente')} className='btn btn-warning'>Sin responder</button>
                    </div>
                    {filtrados.length > 0 ? (
                      <table className="table text-center">
                        <thead className=''>
                          <tr className='table-secondary'>
                            <th scope='col'>Letra</th>
                            <th scope='col'>Definición</th>
                            <th scope='col'>Respuesta Correcta</th>
                            <th scope='col'>Tu respuesta</th>
                            <th scope='col'>Puntos Obtenidos</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filtrados.map(item => (
                            <tr className={`font-size-24  
                              ${formValues[item.letra].state === 'correcto' ? 'table-success' 
                              : formValues[item.letra].state === 'incorrecto' ? 'table-danger' : 'table-warning'}`} >
                              <td scope='row'>{item.label}</td>
                              <td className='font-size-18  max-width-500'>{item.definicion}</td>
                              <td>{formValues[item.letra].respuestas[0]}</td>
                              <td>{formValues[item.letra].state === 'pendiente' ? 'Sin Responder' : formValues[item.letra].value}</td>
                              <td>{formValues[item.letra].puntaje}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      ) : (
                        <div className='w-full font-size-36 text-center'>
                          <p>{mensajeTableFiltrada}</p>
                        </div>
                      )
                    }
                  </div>
                )}
                
              </div>
            </>
          ) : (
            <>
              <div className={`flex justify-center items-center margin-auto w-full ${isMobile ? 'flex-col gap-16' : 'gap-48'}`}>
                <div className='flex flex-col justify-center items-center w-full'>
                  <div className={`puntaje-container flex justify-center items-center w-full text-center gap-4 ${isMobile ? 'font-size-24' : 'flex-col font-size-48'}`}>
                    <p className=''>Puntaje parcial{isMobile && ":"}</p>
                    <p className=''>{puntajeTotal}</p>
                  </div>
                </div>
                <div className={`flex flex-col justify-between ${isMobile ? 'gap-16' : 'gap-24'}` }>
                  <div className={`flex flex-col items-center gap-8`}>
                    <div className={`${isMobile ? 'flex justify-center gap-36' : ''}`}>
                      <div className={`container-label p-12 ${isMobile ? 'w-fit' : ''}`}>
                        <h4 className={`weight-600 ${isMobile ? 'font-size-32' : 'font-size-48'}`}>{currentItem.label}</h4>
                      </div>
                      {isMobile && <div className='flex items-center justify-center w-full'>
                        <div className={`contador-container ${isMobile ? 'pad-8 width-50' : 'p-36 min-width-220'}`}>
                          <p className={`${isMobile ? 'font-size-18' : 'font-size-80'}`}>{contador}</p>
                        </div>
                      </div>}
                    </div>
                    <div className={`containerDefincion  ${isMobile ? 'containerDefincionMobile' : 'containerDefincionDesktop p-20' }`}>
                      <h4 className={`${isMobile ? 'font-size-18' : 'font-size-24'}`}>{currentItem.definicion}</h4>
                    </div>
                  </div>
                  {formValues[currentItem.letra].state === 'pendiente' ? (
                    <input 
                      className={`inputItem ${isMobile ? 'width-380 font-size-24' : 'font-size-36'} ${formValues[currentItem.letra].state !== 'pendiente' && 'inputItem-disabled'}`}
                      placeholder='Escriba su respuesta'
                      onChange={(e) => handleChange(e.target.value, currentItem.letra)}
                      type="text" name={currentItem.letra}
                      autoComplete='off'
                      disabled={formValues[currentItem.letra].state !== 'pendiente'}
                      value={formValues[currentItem.letra].value}
                      autoFocus
                    />
                  ) : (
                    <div className='text-center weight-600'>
                      <p className={`${isMobile ? 'font-size-18' : 'font-size-30'}`}>Te respuesta fue: "{formValues[currentItem.letra].value.trim()}"</p>
                    </div>
                  )}
                  
                  {formValues[currentItem.letra].state === 'pendiente' ? (
                    <button 
                      disabled={formValues[currentItem.letra].value.trim() === ''}
                      type="button" 
                      className="btn btn-success" 
                      onClick={() => enviarRespuesta(currentItem.letra)}
                    >
                      Enviar Respuesta
                    </button>
                  ) : formValues[currentItem.letra].state === 'correcto' ? (
                    <div className={`container-correccion correcto ${isMobile ? 'p-8 flex justify-evenly font-size-18' : 'p-16 font-size-30'}`}>
                      <p>Correcto!!</p>
                      <p>+{formValues[currentItem.letra].puntaje} Puntos</p>
                    </div>
                  ) : (
                    <div className={`container-correccion incorrecto ${isMobile ? 'p-8 flex justify-evenly font-size-18' : 'p-16 font-size-30'}`}>               
                      <p>Incorrecto!!</p>
                    </div>
                  )}
                </div>

                {!isMobile && <div className='flex items-center justify-center w-full'>
                  <div className={`contador-container ${isMobile ? 'pad-8 width-50' : 'p-36 min-width-220'}`}>
                    <p className={`${isMobile ? 'font-size-18' : 'font-size-80'}`}>{contador}</p>
                  </div>
                </div>}
              </div>
            </>
          )}
      </>
      )}
    </div>
  );
}

export default App;
