/*
 ad_sensor package
*/
//% weight=10 icon="\uf140" color=#2896ff
namespace ad_sensor {

    export enum adValuePin {
        //% block="P0"
        P0 = 0,
        //% block="P1"        
        P1 = 1,
        //% block="P2" 
        P2 = 2,
        //% block="P3" 
        P3 = 3,
        //% block="P4" 
        P4 = 4,
        //% block="P10" 
        P10 = 10,
    }

    /**
    * Get the ad sensor value 
    */
    //% weight=98 blockId=adSensorValue block="Get sensor (suport:sound,knob,light,rain drop,soil humidity,etc) pin|%adPin|ad value(0~255)"
    export function adSensorValue(adPin: adValuePin): number {
        let pin: AnalogPin = AnalogPin.P1;
        switch (adPin)
        {
            case 0: pin = AnalogPin.P0; break;
            case 1: pin = AnalogPin.P1; break;
            case 2: pin = AnalogPin.P2; break;
            case 3: pin = AnalogPin.P3; break;
            case 4: pin = AnalogPin.P4; break;
            case 10: pin = AnalogPin.P10; break;
        }
        let adValue = pins.analogReadPin(pin);
        adValue = adValue * 255 / 1023;
        return Math.round(adValue);
    }
}
