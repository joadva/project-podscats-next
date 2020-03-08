export default class extends React.Component {

    static async getInitialProps({ query }) {
        let idChannel = query.id

        let reqChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`)
        let dataChannel = await reqChannel.json()
        let channel = dataChannel.body.channel

        let reqAudio = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
        let dataAudio = await reqAudio.json()
        let audioClips = dataAudio.body.audio_clips

        let reqSeries = await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
        let dataSeries = await reqSeries.json()
        let series = dataSeries.body.channels




        return { channel, audioClips, series }
    }

    render() {
        const { channel, audioClips, series } = this.props

        return <div>
            <header>Podscats</header>
            <h1> {channel.title}</h1>

            <h2> Series</h2>
            {series.map((serie) =>
                <div> {serie.title} </div>
            )}

            <h2> ultimos potscats</h2>
            {audioClips.map((clip) =>
                <div> {clip.title} </div>
            )}


            <style jsx>{`
                header {
                  color: #fff;
                  background: #8756ca;
                  padding: 15px;
                  text-align: 15px;
                 }
                 .channels{
                     display: grid;
                     grid-gap: 15px;
                     padding:15px;
                     grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    
                 }

                 .channel {
                     display: block;
                     border-radius: 3px;
                     box-shadow: 0px 2px 6px rgb(0,0,0,0.15);
                     margin-bottom: 0.5em;
                 }
                 .channel img {
                     width:100%;
                 }

                 h1 {
                     font-weight:600;
                     padding:15px;

                 }
                 h2 {
                     padding:5x;
                     fotn-size: 0.9em;
                     font-weight: 600;
                     margin:0;
                     text-align:center;

                 }
              ` }

            </style>
            <style jsx global> {`
            body{
                margin: 0;
                font-family: system-ui;
                background: white;
            }

        `}</style>
        </div>
    }

}