var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var HMVideoPlayerOriginal = /** @class */ (function (_super) {
    __extends(HMVideoPlayerOriginal, _super);
    function HMVideoPlayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HMVideoPlayerOriginal.prototype.showVideo = function (options, success, error) { return cordova(this, "showVideo", {}, arguments); };
    HMVideoPlayerOriginal.pluginName = "VideoPlayer";
    HMVideoPlayerOriginal.plugin = "cordova-plugin-videoplayer";
    HMVideoPlayerOriginal.pluginRef = "cordova.plugins.VideoPlayer";
    HMVideoPlayerOriginal.repo = "";
    HMVideoPlayerOriginal.install = "ionic cordova plugin add cordova-plugin-videoplayer";
    HMVideoPlayerOriginal.installVariables = [];
    HMVideoPlayerOriginal.platforms = ["Android", "iOS"];
    return HMVideoPlayerOriginal;
}(IonicNativePlugin));
var HMVideoPlayer = new HMVideoPlayerOriginal();
export { HMVideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2htLXZpZGVvLXBsYXllci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUEsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQzs7SUFjekYsaUNBQWlCOzs7O0lBU2xELGlDQUFTLGFBQUMsT0FBZSxFQUFFLE9BQThCLEVBQUUsS0FBMkI7Ozs7Ozs7O3dCQXpCeEY7RUFnQm1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFcnJvckNhbGxiYWNrLCBTdWNjZXNzQ2FsbGJhY2sgfSBmcm9tICcuLi9pbWFnZS1zYXZlJ1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1ZpZGVvUGxheWVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdmlkZW9wbGF5ZXInLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlZpZGVvUGxheWVyJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXZpZGVvcGxheWVyJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhNVmlkZW9QbGF5ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcbiAgICogQHBhcmFtIGFyZzEge3N0cmluZ30gU29tZSBwYXJhbSB0byBjb25maWd1cmUgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBhcmcyIHtudW1iZXJ9IEFub3RoZXIgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93VmlkZW8ob3B0aW9uczogc3RyaW5nLCBzdWNjZXNzPzogU3VjY2Vzc0NhbGxiYWNrPGFueT4sIGVycm9yID86IEVycm9yQ2FsbGJhY2s8YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==