import DataIntegration from '../../assets/svg/data-integration.svg'
import Actives from '../../assets/svg/ativos-eletricos.svg'
import SmartComunication from '../../assets/svg/smart-comunication.svg'
import Protection from '../../assets/svg/protecao.svg'


import Monitoramento from '../../assets/svg/relogio.svg'
import Seta from '../../assets/svg/seta.svg'
import Setas from '../../assets/svg/setas.svg'
import Raio from '../../assets/svg/raio.svg'
import Analise from '../../assets/svg/analise.svg'
import Harmonicas from '../../assets/svg/harmonicas.svg'
import Temperatura from '../../assets/svg/termometro.svg'
import Supervisao from '../../assets/svg/supervisao.svg'


export const OmniData = {
    one: [
        {
            id: 1,
            title: 'Sistema de Proteção',
            image: Protection
        },
        {
            id: 2,
            title: 'Integração de dados',
            image: DataIntegration
        },
        {
            id: 3,
            title: 'Gestão de Ativos Elétricos',
            image: Actives
        },
        {
            id: 4,
            title: 'Comunicação inteligente',
            image: SmartComunication
        },
    ],
    two : [
        {
            id: 1,
            title: 'Monitoramento de  tensão, corrente e carga;',
            image: SmartComunication
        },
        {
            id: 2,
            title: 'Análise de perda de vida útil do transformador;',
            image: DataIntegration
        },
        {
            id: 3,
            title: 'Medição do balanço energético de Perdas',
            image: Actives
        },
        {
            id: 4,
            title: 'Gestão de ativos elétricos',
            image: SmartComunication
        },
        {
            id: 5   ,
            title: 'Gestão de ativos elétricos',
            image: SmartComunication
        },
    ],
    three : [
        {
            id: 1,
            title: 'Monitoramento de  tensão, corrente e carga;',
            image: Monitoramento,
            duration: 2500
        },  
        {
            id: 2,
            title: 'Análise de perda de vida útil do transformador;',
            image: Seta,
            duration: 2500
        },
        {
            id: 3,
            title: 'Medição do balanço energético de Perdas',
            image: Setas,
            duration: 2500
        },
        {
            id: 4,
            title: 'Gestão de ativos elétricos',
            image: Raio,
            duration: 2500
        },
        {
            id: 5   ,
            title: 'Análise de Fator de potência',
            image: Analise,
            duration: 2500
        },
        {
            id: 6,
            title: 'Harmônicas de corrente e tensão',
            image: Harmonicas,
            duration: 2500
        },
        {
            id: 7,
            title: 'Medição de temperatura interna',
            image: Temperatura,
            duration: 2500
        },
        {
            id: 8,
            title: 'Supervisão de  baixa tensão ',
            image: Supervisao,
            duration: 2500
        },
    ]
}
