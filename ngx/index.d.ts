import { IonicNativePlugin } from '@ionic-native/core';
import { ErrorCallback, SuccessCallback } from '../image-save';
export declare class HMVideoPlayer extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    showVideo(options: string, success?: SuccessCallback<any>, error?: ErrorCallback<any>): Promise<any>;
}
