/*
 ad_sensor package
*/
//% weight=10 icon="\uf140" color=#2896ff
namespace ad_sensor {
    /**
    * Get the ad sensor value 
    */
    //% weight=98 blockId=adSensorValue block="Get sensor (suport:sound,knob,light,rain drop,soil humidity,etc) pin|%adPin|ad value(0~255)"
    export function adSensorValue(adPin: AnalogPin): number {
        let adValue = pins.analogReadPin(adPin);
        adValue = adValue * 255 / 1023;
        return Math.round(adValue);
    }
}
