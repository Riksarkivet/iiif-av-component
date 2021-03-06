// iiif-av-component v0.0.77 https://github.com/iiif-commons/iiif-av-component#readme
interface Array<T> {
    /**
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     * @param searchElement The element to search for.
     * @param fromIndex The position in this array at which to begin searching for searchElement.
     */
    includes(searchElement: T, fromIndex?: number): boolean;
}
interface Window {
    MediaSource: any;
    WebKitMediaSource: any;
    jQuery: any;
}
declare var dashjs: any;
declare var Hls: any;
declare var WaveformData: any;

/// <reference types="base-component" />
declare namespace IIIFComponents {
    class AVComponent extends _Components.BaseComponent {
        private _data;
        options: _Components.IBaseComponentOptions;
        canvasInstances: CanvasInstance[];
        private _checkAllMediaReadyInterval;
        private _checkAllWaveformsReadyInterval;
        private _readyMedia;
        private _readyWaveforms;
        private _posterCanvasWidth;
        private _posterCanvasHeight;
        private _$posterContainer;
        private _$posterImage;
        private _$posterExpandButton;
        private _posterImageExpanded;
        constructor(options: _Components.IBaseComponentOptions);
        protected _init(): boolean;
        data(): IAVComponentData;
        set(data: IAVComponentData): void;
        private _render();
        reset(): void;
        private _reset();
        private _checkAllMediaReady();
        private _checkAllWaveformsReady();
        private _getCanvasInstancesWithWaveforms();
        private _getCanvases();
        private _initCanvas(canvas);
        private _prevRange();
        private _nextRange();
        private _setCanvasInstanceVolumes(volume);
        private _getCanvasInstanceById(canvasId);
        private _getCurrentCanvas();
        private _rewind();
        play(): void;
        pause(): void;
        playRange(rangeId: string): void;
        showCanvas(canvasId: string): void;
        private _logMessage(message);
        private _getPosterImageCss(expanded);
        resize(): void;
    }
}
declare namespace IIIFComponents.AVComponent {
    class Events {
        static MEDIA_READY: string;
        static LOG: string;
        static RANGE_CHANGED: string;
        static WAVEFORM_READY: string;
        static WAVEFORMS_READY: string;
    }
}

/// <reference types="base-component" />
declare namespace IIIFComponents {
    class AVVolumeControl extends _Components.BaseComponent {
        private _$volumeSlider;
        private _$volumeMute;
        private _lastVolume;
        private _data;
        constructor(options: _Components.IBaseComponentOptions);
        protected _init(): boolean;
        set(data: IAVVolumeControlState): void;
        private _render();
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.AVVolumeControl {
    class Events {
        static VOLUME_CHANGED: string;
    }
}

/// <reference types="base-component" />
/// <reference types="manifesto.js" />
/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace IIIFComponents {
    class CanvasInstance extends _Components.BaseComponent {
        private _$canvasContainer;
        private _$canvasDuration;
        private _$canvasHoverHighlight;
        private _$canvasHoverPreview;
        private _$canvasTime;
        private _$canvasTimelineContainer;
        private _$controlsContainer;
        private _$durationHighlight;
        private _$hoverPreviewTemplate;
        private _$nextButton;
        private _$optionsContainer;
        private _$playButton;
        private _$prevButton;
        private _$rangeHoverHighlight;
        private _$rangeHoverPreview;
        private _$rangeTimelineContainer;
        private _$timeDisplay;
        private _$timelineItemContainer;
        private _canvasClockFrequency;
        private _canvasClockInterval;
        private _canvasClockStartDate;
        private _canvasClockTime;
        private _canvasHeight;
        private _canvasWidth;
        private _compositeWaveform;
        private _contentAnnotations;
        private _data;
        private _highPriorityFrequency;
        private _highPriorityInterval;
        private _isPlaying;
        private _isStalled;
        private _lastCanvasHeight;
        private _lastCanvasWidth;
        private _lowPriorityFrequency;
        private _lowPriorityInterval;
        private _mediaSyncMarginSecs;
        private _rangeSpanPadding;
        private _readyMediaCount;
        private _stallRequestedBy;
        private _volume;
        private _wasPlaying;
        private _waveformCanvas;
        private _waveformCtx;
        ranges: Manifesto.IRange[];
        waveforms: string[];
        $playerElement: JQuery;
        logMessage: (message: string) => void;
        constructor(options: _Components.IBaseComponentOptions);
        init(): void;
        private _getBody(bodies);
        private _getDuration();
        data(): IAVCanvasInstanceData;
        isVirtual(): boolean;
        isVisible(): boolean;
        includesVirtualSubCanvas(canvasId: string): boolean;
        set(data: IAVCanvasInstanceData): void;
        private _hasRangeChanged();
        private _getRangeForCurrentTime(parentRange?);
        private _rangeSpansCurrentTime(range);
        private _rangeNavigable(range);
        private _render();
        getCanvasId(): string | undefined;
        private _updateHoverPreview(e, $container, duration);
        private _previous(isDouble);
        private _next();
        destroy(): void;
        private _convertToPercentage(pixelValue, maxValue);
        private _renderMediaElement(data);
        private _getWaveformData(url);
        private _renderWaveform();
        private _drawWaveform();
        private _scaleY;
        private _getWaveformMaxAndMin(waveform, index, sampleSpacing);
        private _updateCurrentTimeDisplay();
        private _updateDurationDisplay();
        private _renderSyncIndicator(mediaElementData);
        private _setCurrentTime(seconds);
        private _rewind(withoutUpdate?);
        private _fastforward();
        play(withoutUpdate?: boolean): void;
        pause(withoutUpdate?: boolean): void;
        private _isNavigationConstrainedToRange();
        private _canvasClockUpdater();
        private _highPriorityUpdater();
        private _lowPriorityUpdater();
        private _updateMediaActiveStates();
        private _pauseMedia(media);
        private _setMediaCurrentTime(media, time);
        private _synchronizeMedia();
        private _checkMediaSynchronization();
        private _playbackStalled(aBoolean, syncMediaRequestingStall);
        resize(): void;
    }
}
declare namespace IIIFComponents.AVComponentCanvasInstance {
    class Events {
        static NEXT_RANGE: string;
        static PAUSECANVAS: string;
        static PLAYCANVAS: string;
        static PREVIOUS_RANGE: string;
    }
}

declare namespace IIIFComponents.AVComponentObjects {
    class CompositeWaveform {
        private _waveforms;
        length: number;
        duration: number;
        pixelsPerSecond: number;
        secondsPerPixel: number;
        constructor(waveforms: any[]);
        min(index: number): any;
        max(index: number): any;
        _find(index: number): Waveform | null;
    }
}

/// <reference types="manifesto.js" />
declare namespace IIIFComponents {
    interface IAVCanvasInstanceData extends IAVComponentData {
        canvas?: Manifesto.ICanvas | AVComponentObjects.VirtualCanvas;
        range?: Manifesto.IRange;
        visible?: boolean;
        volume?: number;
    }
}

/// <reference types="@iiif/manifold" />
declare namespace IIIFComponents {
    interface IAVComponentContent {
        currentTime: string;
        collapse: string;
        duration: string;
        expand: string;
        mute: string;
        next: string;
        pause: string;
        play: string;
        previous: string;
        unmute: string;
    }
    interface IAVComponentData {
        [key: string]: any;
        autoPlay?: boolean;
        autoSelectRange?: boolean;
        canvasId?: string;
        constrainNavigationToRange?: boolean;
        content?: IAVComponentContent;
        defaultAspectRatio?: number;
        doubleClickMS?: number;
        helper?: Manifold.IHelper;
        halveAtWidth?: number;
        limitToRange?: boolean;
        posterImageRatio?: number;
        rangeId?: string;
        virtualCanvasEnabled?: boolean;
        waveformBarSpacing?: number;
        waveformBarWidth?: number;
        waveformColor?: string;
    }
}

declare namespace IIIFComponents {
    interface IAVVolumeControlState {
        volume?: number;
    }
}

declare namespace IIIFComponents {
    interface IMaxMin {
        max: number;
        min: number;
    }
}

/// <reference types="manifesto.js" />
declare namespace IIIFComponents.AVComponentUtils {
    class Utils {
        private static _compare(a, b);
        static diff(a: any, b: any): string[];
        static getSpatialComponent(target: string): number[] | null;
        static getFirstTargetedCanvasId(range: Manifesto.IRange): string | undefined;
        static getTimestamp(): string;
        static retargetTemporalComponent(canvases: Manifesto.ICanvas[], target: string): string | undefined;
        static formatTime(aNumber: number): string;
        static detectIE(): number | boolean;
        static isSafari(): boolean;
        static debounce(fn: any, debounceDuration: number): any;
        static hlsMimeTypes: string[];
        static normalise(num: number, min: number, max: number): number;
        static isHLSFormat(format: Manifesto.MediaType): boolean;
        static isMpegDashFormat(format: Manifesto.MediaType): boolean;
        static canPlayHls(): boolean;
    }
}

/// <reference types="manifesto.js" />
declare namespace IIIFComponents.AVComponentObjects {
    class VirtualCanvas {
        canvases: Manifesto.ICanvas[];
        id: string;
        constructor();
        addCanvas(canvas: Manifesto.ICanvas): void;
        getContent(): Manifesto.IAnnotation[];
        getDuration(): number | null;
        getWidth(): number;
        getHeight(): number;
    }
}

declare namespace IIIFComponents.AVComponentObjects {
    class Waveform {
        start: number;
        end: number;
        waveform: any;
    }
}
