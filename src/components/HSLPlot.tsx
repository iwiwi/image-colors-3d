import React, { ChangeEvent } from 'react';
import loadImage from 'blueimp-load-image';
import Plot from 'react-plotly.js';

interface Props {
    fileBlobOrURL: File | Blob | string;
}

interface State {
    x: number[];
    y: number[];
    z: number[];
    colors: string[];
}

const RGBToHSL = (r: number, g: number, b: number) => {
    // https://css-tricks.com/converting-color-spaces-in-javascript/
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
  
    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    // No difference
    if (delta == 0)
        h = 0;
    // Red is max
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
        h = (b - r) / delta + 2;
    // Blue is max
    else
        h = (r - g) / delta + 4;

    h = h * 60;
        
    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;

// Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    return [h, s, l]
}
  

class HSLPlot extends React.Component<Props, State>  {
  constructor(props: Props){
    super(props);
    this.state = {
      x: [], y: [], z: [],
      colors: [],
    };

    loadImage(
        props.fileBlobOrURL,
        (data) => {
            if (data instanceof Event) {
              alert('error!');
            } else if (data instanceof HTMLImageElement) {
              alert('image!');
            } else {
              // this.setState({img_src: data.toDataURL()});
              this.analyzeImage(data);
            }
        },
        {
            maxWidth: 100,
            canvas: true,
        }
    );
  }

  analyzeImage(imageCanvas: HTMLCanvasElement) {
    const ctx = imageCanvas.getContext('2d');
    if (ctx === null) {
        alert('error');
        return;
    }
    const pixels = ctx.getImageData(0, 0, imageCanvas.width, imageCanvas.height).data;
    let xs = [], ys = [], zs = [], colors = [];
    for (let i = 0; i < pixels.length; i += 4) {
        const [r, g, b] = [pixels[i], pixels[i + 1], pixels[i + 2]];
        const [h, s, l] = RGBToHSL(r, g, b);
        //console.log(r, g, b);

        const z = l;
        console.log(h);
        const angle = h / 180 * Math.PI;
        const radius = Math.sqrt(0.5 ** 2 - (z - 0.5) ** 2) * s;
        const x = Math.sin(angle) * radius;
        const y = Math.cos(angle) * radius;

        xs.push(x);
        ys.push(y);
        zs.push(z);

        /*
        xs.push(r);
        ys.push(g);
        zs.push(b);
        */
        colors.push(`rgb(${r}, ${g}, ${b})`)
    }
    this.setState({
        x: xs,
        y: ys,
        z: zs,
        colors: colors,
    })
  }
  
  render() {
    return (
        <Plot
          data={[
            {
              x: this.state.x,
              y: this.state.y,
              z: this.state.z,
              type: 'scatter3d',
              mode: 'markers',
              marker: {color: this.state.colors, size: 3},
            },
            //{type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
          ]}
          layout={ {width: 600, height: 600} }
        />
      );
  }
}

export default HSLPlot;
