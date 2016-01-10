/**
 * Created by linfaxin on 15/11/15.
 */
///<reference path="../view/View.ts"/>
///<reference path="../content/res/Resources.ts"/>
///<reference path="../graphics/Color.ts"/>
///<reference path="../graphics/drawable/Drawable.ts"/>
///<reference path="../graphics/drawable/InsetDrawable.ts"/>
///<reference path="../graphics/drawable/ColorDrawable.ts"/>
///<reference path="../graphics/drawable/LayerDrawable.ts"/>
///<reference path="../graphics/drawable/RotateDrawable.ts"/>
///<reference path="../graphics/drawable/ScaleDrawable.ts"/>
///<reference path="../graphics/drawable/AnimationDrawable.ts"/>
///<reference path="../graphics/drawable/StateListDrawable.ts"/>
///<reference path="id.ts"/>


module android.R{
    import View = android.view.View;
    import Resources = android.content.res.Resources;
    import Color = android.graphics.Color;
    import Drawable = android.graphics.drawable.Drawable;
    import InsetDrawable = android.graphics.drawable.InsetDrawable;
    import ColorDrawable = android.graphics.drawable.ColorDrawable;
    import LayerDrawable = android.graphics.drawable.LayerDrawable;
    import RotateDrawable = android.graphics.drawable.RotateDrawable;
    import ScaleDrawable = android.graphics.drawable.ScaleDrawable;
    import AnimationDrawable = android.graphics.drawable.AnimationDrawable;
    import StateListDrawable = android.graphics.drawable.StateListDrawable;
    import Gravity = android.view.Gravity;
    window.addEventListener('AndroidUILoadFinish', ()=>{
        eval('View = android.view.View;');//real import now
    });


    const density = Resources.getDisplayMetrics().density;
    export class drawable{
        static get button_background():Drawable {
            class DefaultButtonBackgroundDrawable extends InsetDrawable {
                constructor() {
                    super(DefaultButtonBackgroundDrawable.createStateList(), 6 * density);
                }

                private static createStateList():Drawable {
                    let stateList = new StateListDrawable();
                    stateList.addState([View.VIEW_STATE_PRESSED], new ColorDrawable(Color.GRAY));
                    stateList.addState([View.VIEW_STATE_ACTIVATED], new ColorDrawable(Color.GRAY));
                    stateList.addState([View.VIEW_STATE_FOCUSED], new ColorDrawable(0xffaaaaaa));
                    stateList.addState([-View.VIEW_STATE_ENABLED], new ColorDrawable(0xffebebeb));
                    stateList.addState([], new ColorDrawable(Color.LTGRAY));
                    return stateList;
                }

                getPadding(padding:android.graphics.Rect):boolean {
                    let result = super.getPadding(padding);
                    //extra padding to text
                    padding.left += 12 * density;
                    padding.right += 12 * density;
                    padding.top += 6 * density;
                    padding.bottom += 6 * density;
                    return result;
                }

                getIntrinsicWidth():number {
                    return 64*density;
                }

                getIntrinsicHeight():number {
                    return 48*density;
                }
            }
            return new DefaultButtonBackgroundDrawable();
        }

        static get btn_check():Drawable {
            let stateList = new StateListDrawable();
            //Enabled states
            stateList.addState([View.VIEW_STATE_CHECKED, -View.VIEW_STATE_WINDOW_FOCUSED, View.VIEW_STATE_ENABLED], R.image.btn_check_on_holo_light);
            stateList.addState([-View.VIEW_STATE_CHECKED, -View.VIEW_STATE_WINDOW_FOCUSED, View.VIEW_STATE_ENABLED], R.image.btn_check_off_holo_light);

            stateList.addState([View.VIEW_STATE_CHECKED, View.VIEW_STATE_PRESSED, View.VIEW_STATE_ENABLED], R.image.btn_check_on_pressed_holo_light);
            stateList.addState([-View.VIEW_STATE_CHECKED, View.VIEW_STATE_PRESSED, View.VIEW_STATE_ENABLED], R.image.btn_check_off_pressed_holo_light);

            stateList.addState([View.VIEW_STATE_CHECKED, View.VIEW_STATE_FOCUSED, View.VIEW_STATE_ENABLED], R.image.btn_check_on_focused_holo_light);
            stateList.addState([-View.VIEW_STATE_CHECKED, View.VIEW_STATE_FOCUSED, View.VIEW_STATE_ENABLED], R.image.btn_check_off_focused_holo_light);

            stateList.addState([View.VIEW_STATE_CHECKED, View.VIEW_STATE_ENABLED], R.image.btn_check_on_holo_light);
            stateList.addState([-View.VIEW_STATE_CHECKED, View.VIEW_STATE_ENABLED], R.image.btn_check_off_holo_light);

            //Disabled states
            stateList.addState([View.VIEW_STATE_CHECKED, -View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_check_on_disabled_holo_light);
            stateList.addState([-View.VIEW_STATE_CHECKED, -View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_check_off_disabled_holo_light);

            stateList.addState([View.VIEW_STATE_CHECKED, View.VIEW_STATE_FOCUSED], R.image.btn_check_on_disabled_focused_holo_light);
            stateList.addState([-View.VIEW_STATE_CHECKED, View.VIEW_STATE_FOCUSED], R.image.btn_check_off_disabled_focused_holo_light);

            stateList.addState([-View.VIEW_STATE_CHECKED], R.image.btn_check_off_disabled_holo_light);
            stateList.addState([View.VIEW_STATE_CHECKED], R.image.btn_check_on_disabled_holo_light);

            return stateList;
        }

        static get btn_radio():Drawable {
            let stateList = new StateListDrawable();
            //Enabled states
            stateList.addState([View.VIEW_STATE_CHECKED, -View.VIEW_STATE_WINDOW_FOCUSED, View.VIEW_STATE_ENABLED], R.image.btn_radio_on_holo_light);
            stateList.addState([-View.VIEW_STATE_CHECKED, -View.VIEW_STATE_WINDOW_FOCUSED, View.VIEW_STATE_ENABLED], R.image.btn_radio_off_holo_light);

            stateList.addState([View.VIEW_STATE_CHECKED, View.VIEW_STATE_PRESSED, View.VIEW_STATE_ENABLED], R.image.btn_radio_on_pressed_holo_light);
            stateList.addState([-View.VIEW_STATE_CHECKED, View.VIEW_STATE_PRESSED, View.VIEW_STATE_ENABLED], R.image.btn_radio_off_pressed_holo_light);

            stateList.addState([View.VIEW_STATE_CHECKED, View.VIEW_STATE_FOCUSED, View.VIEW_STATE_ENABLED], R.image.btn_radio_on_focused_holo_light);
            stateList.addState([-View.VIEW_STATE_CHECKED, View.VIEW_STATE_FOCUSED, View.VIEW_STATE_ENABLED], R.image.btn_radio_off_focused_holo_light);

            stateList.addState([View.VIEW_STATE_CHECKED, View.VIEW_STATE_ENABLED], R.image.btn_radio_on_holo_light);
            stateList.addState([-View.VIEW_STATE_CHECKED, View.VIEW_STATE_ENABLED], R.image.btn_radio_off_holo_light);

            //Disabled states
            stateList.addState([View.VIEW_STATE_CHECKED, -View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_radio_on_disabled_holo_light);
            stateList.addState([-View.VIEW_STATE_CHECKED, -View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_radio_off_disabled_holo_light);

            stateList.addState([View.VIEW_STATE_CHECKED, View.VIEW_STATE_FOCUSED], R.image.btn_radio_on_disabled_focused_holo_light);
            stateList.addState([-View.VIEW_STATE_CHECKED, View.VIEW_STATE_FOCUSED], R.image.btn_radio_off_disabled_focused_holo_light);

            stateList.addState([-View.VIEW_STATE_CHECKED], R.image.btn_radio_off_disabled_holo_light);
            stateList.addState([View.VIEW_STATE_CHECKED], R.image.btn_radio_on_disabled_holo_light);

            return stateList;
        }

        static get progress_small_holo():Drawable {
            let rotate1 = new RotateDrawable(null);
            rotate1.mState.mDrawable = R.image.spinner_16_outer_holo;
            rotate1.mState.mPivotXRel = true;
            rotate1.mState.mPivotX = 0.5;
            rotate1.mState.mPivotYRel = true;
            rotate1.mState.mPivotY = 0.5;
            rotate1.mState.mFromDegrees = 0;
            rotate1.mState.mToDegrees = 1080;

            let rotate2 = new RotateDrawable(null);
            rotate2.mState.mDrawable = R.image.spinner_16_inner_holo;
            rotate2.mState.mPivotXRel = true;
            rotate2.mState.mPivotX = 0.5;
            rotate2.mState.mPivotYRel = true;
            rotate2.mState.mPivotY = 0.5;
            rotate2.mState.mFromDegrees = 720;
            rotate2.mState.mToDegrees = 0;

            return new LayerDrawable([rotate1, rotate2]);
        }

        static get progress_medium_holo():Drawable {
            let rotate1 = new RotateDrawable(null);
            rotate1.mState.mDrawable = R.image.spinner_48_outer_holo;
            rotate1.mState.mPivotXRel = true;
            rotate1.mState.mPivotX = 0.5;
            rotate1.mState.mPivotYRel = true;
            rotate1.mState.mPivotY = 0.5;
            rotate1.mState.mFromDegrees = 0;
            rotate1.mState.mToDegrees = 1080;

            let rotate2 = new RotateDrawable(null);
            rotate2.mState.mDrawable = R.image.spinner_48_inner_holo;
            rotate2.mState.mPivotXRel = true;
            rotate2.mState.mPivotX = 0.5;
            rotate2.mState.mPivotYRel = true;
            rotate2.mState.mPivotY = 0.5;
            rotate2.mState.mFromDegrees = 720;
            rotate2.mState.mToDegrees = 0;

            return new LayerDrawable([rotate1, rotate2]);
        }

        static get progress_large_holo():Drawable {
            let rotate1 = new RotateDrawable(null);
            rotate1.mState.mDrawable = R.image.spinner_76_outer_holo;
            rotate1.mState.mPivotXRel = true;
            rotate1.mState.mPivotX = 0.5;
            rotate1.mState.mPivotYRel = true;
            rotate1.mState.mPivotY = 0.5;
            rotate1.mState.mFromDegrees = 0;
            rotate1.mState.mToDegrees = 1080;

            let rotate2 = new RotateDrawable(null);
            rotate2.mState.mDrawable = R.image.spinner_76_inner_holo;
            rotate2.mState.mPivotXRel = true;
            rotate2.mState.mPivotX = 0.5;
            rotate2.mState.mPivotYRel = true;
            rotate2.mState.mPivotY = 0.5;
            rotate2.mState.mFromDegrees = 720;
            rotate2.mState.mToDegrees = 0;

            return new LayerDrawable([rotate1, rotate2]);
        }

        static get progress_horizontal_holo():Drawable {
            let layerDrawable = new LayerDrawable(null);
            let returnHeight = ()=> 3 * density;
            let insetTopBottom = Math.floor(8 * density);

            let bg = new ColorDrawable(0x4c000000);
            bg.getIntrinsicHeight = returnHeight;
            layerDrawable.addLayer(bg, R.id.background, 0, insetTopBottom, 0, insetTopBottom);

            let secondary = new ScaleDrawable(new ColorDrawable(0x4c33b5e5), Gravity.LEFT, 1, -1);
            secondary.getIntrinsicHeight = returnHeight;
            layerDrawable.addLayer(secondary, R.id.secondaryProgress, 0, insetTopBottom, 0, insetTopBottom);

            let progress = new ScaleDrawable(new ColorDrawable(0xcc33b5e5), Gravity.LEFT, 1, -1);
            progress.getIntrinsicHeight = returnHeight;
            layerDrawable.addLayer(progress, R.id.progress, 0, insetTopBottom, 0, insetTopBottom);

            layerDrawable.ensurePadding();
            layerDrawable.onStateChange(layerDrawable.getState());

            return layerDrawable;
        }

        static get progress_indeterminate_horizontal_holo():Drawable {
            let animDrawable = new AnimationDrawable();
            animDrawable.setOneShot(false);

            let frame = R.image.progressbar_indeterminate_holo1;
            frame.setCallback(animDrawable);
            animDrawable.addFrame(frame, 50);
            frame = R.image.progressbar_indeterminate_holo2;
            frame.setCallback(animDrawable);
            animDrawable.addFrame(frame, 50);
            frame = R.image.progressbar_indeterminate_holo3;
            frame.setCallback(animDrawable);
            animDrawable.addFrame(frame, 50);
            frame = R.image.progressbar_indeterminate_holo4;
            frame.setCallback(animDrawable);
            animDrawable.addFrame(frame, 50);
            frame = R.image.progressbar_indeterminate_holo5;
            frame.setCallback(animDrawable);
            animDrawable.addFrame(frame, 50);
            frame = R.image.progressbar_indeterminate_holo6;
            frame.setCallback(animDrawable);
            animDrawable.addFrame(frame, 50);
            frame = R.image.progressbar_indeterminate_holo7;
            frame.setCallback(animDrawable);
            animDrawable.addFrame(frame, 50);
            frame = R.image.progressbar_indeterminate_holo8;
            frame.setCallback(animDrawable);
            animDrawable.addFrame(frame, 50);

            return animDrawable;
        }

        static get ratingbar_full_empty_holo_light():Drawable {
            let stateList = new StateListDrawable();
            stateList.addState([View.VIEW_STATE_PRESSED, View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_rating_star_off_pressed_holo_light);
            stateList.addState([View.VIEW_STATE_FOCUSED, View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_rating_star_off_pressed_holo_light);
            stateList.addState([View.VIEW_STATE_SELECTED, View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_rating_star_off_pressed_holo_light);
            //stateList.addState([View.VIEW_STATE_FOCUSED, View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_rating_star_off_focused_holo_light);
            //stateList.addState([View.VIEW_STATE_SELECTED, View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_rating_star_off_focused_holo_light);
            stateList.addState([], R.image.btn_rating_star_off_normal_holo_light);
            return stateList;
        }
        
        static get ratingbar_full_filled_holo_light():Drawable {
            let stateList = new StateListDrawable();
            stateList.addState([View.VIEW_STATE_PRESSED, View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_rating_star_on_pressed_holo_light);
            stateList.addState([View.VIEW_STATE_FOCUSED, View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_rating_star_on_pressed_holo_light);
            stateList.addState([View.VIEW_STATE_SELECTED, View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_rating_star_on_pressed_holo_light);
            //stateList.addState([View.VIEW_STATE_FOCUSED, View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_rating_star_on_focused_holo_light);
            //stateList.addState([View.VIEW_STATE_SELECTED, View.VIEW_STATE_WINDOW_FOCUSED], R.image.btn_rating_star_on_focused_holo_light);
            stateList.addState([], R.image.btn_rating_star_on_normal_holo_light);
            return stateList;
        }

        static get ratingbar_full_holo_light():Drawable {
            let layerDrawable = new LayerDrawable(null);

            layerDrawable.addLayer(R.drawable.ratingbar_full_empty_holo_light, R.id.background);
            layerDrawable.addLayer(R.drawable.ratingbar_full_empty_holo_light, R.id.secondaryProgress);
            layerDrawable.addLayer(R.drawable.ratingbar_full_filled_holo_light, R.id.progress);

            layerDrawable.ensurePadding();
            layerDrawable.onStateChange(layerDrawable.getState());

            return layerDrawable;
        }

        static get ratingbar_holo_light():Drawable {
            let layerDrawable = new LayerDrawable(null);

            layerDrawable.addLayer(R.image.rate_star_big_off_holo_light, R.id.background);
            layerDrawable.addLayer(R.image.rate_star_big_half_holo_light, R.id.secondaryProgress);
            layerDrawable.addLayer(R.image.rate_star_big_on_holo_light, R.id.progress);

            layerDrawable.ensurePadding();
            layerDrawable.onStateChange(layerDrawable.getState());

            return layerDrawable;
        }

        static get ratingbar_small_holo_light():Drawable {
            let layerDrawable = new LayerDrawable(null);

            layerDrawable.addLayer(R.image.rate_star_small_off_holo_light, R.id.background);
            layerDrawable.addLayer(R.image.rate_star_small_half_holo_light, R.id.secondaryProgress);
            layerDrawable.addLayer(R.image.rate_star_small_on_holo_light, R.id.progress);

            layerDrawable.ensurePadding();
            layerDrawable.onStateChange(layerDrawable.getState());

            return layerDrawable;
        }

        static get scrubber_control_selector_holo():Drawable {
            let stateList = new StateListDrawable();
            stateList.addState([-View.VIEW_STATE_ENABLED], R.image.scrubber_control_disabled_holo);
            stateList.addState([View.VIEW_STATE_PRESSED], R.image.scrubber_control_pressed_holo);
            stateList.addState([View.VIEW_STATE_SELECTED], R.image.scrubber_control_focused_holo);
            stateList.addState([], R.image.scrubber_control_normal_holo);
            return stateList;
        }

        static get scrubber_progress_horizontal_holo_light():Drawable {
            let layerDrawable = new LayerDrawable(null);

            layerDrawable.addLayer(R.drawable.scrubber_track_holo_light, R.id.background);

            let secondary = new ScaleDrawable(R.drawable.scrubber_secondary_holo, Gravity.LEFT, 1, -1);
            layerDrawable.addLayer(secondary, R.id.secondaryProgress);

            let progress = new ScaleDrawable(R.drawable.scrubber_primary_holo, Gravity.LEFT, 1, -1);
            layerDrawable.addLayer(progress, R.id.progress);

            layerDrawable.ensurePadding();
            layerDrawable.onStateChange(layerDrawable.getState());

            return layerDrawable;
        }

        static get scrubber_primary_holo():Drawable {
            let line = new ColorDrawable(0xff33b5e5);
            line.getIntrinsicHeight = ()=> 3 * density;
            return new InsetDrawable(line, 0, 5 * density, 0, 5 * density);
        }

        static get scrubber_secondary_holo():Drawable {
            let line = new ColorDrawable(0x4c33b5e5);
            line.getIntrinsicHeight = ()=> 3 * density;
            return new InsetDrawable(line, 0, 5 * density, 0, 5 * density);
        }

        static get scrubber_track_holo_light():Drawable {
            let line = new ColorDrawable(0x66666666);
            line.getIntrinsicHeight = ()=> 1 * density;
            return new InsetDrawable(line, 0, 6 * density, 0, 6 * density);
        }

        static get list_selector_background():Drawable {
            return this.item_background;
        }

        static get list_divider():Drawable {
            let divider = new ColorDrawable(0xffcccccc);
            return divider;
        }

        static get divider_vertical():Drawable {
            return this.divider_horizontal;
        }

        static get divider_horizontal():Drawable {
            let divider = new ColorDrawable(0xffdddddd);
            divider.getIntrinsicWidth = ()=> 1;
            divider.getIntrinsicHeight = ()=> 1;
            return divider;
        }

        static get item_background(){
            let stateList = new StateListDrawable();
            stateList.addState([View.VIEW_STATE_FOCUSED, -View.VIEW_STATE_ENABLED], new ColorDrawable(0xffebebeb));
            stateList.addState([View.VIEW_STATE_FOCUSED, View.VIEW_STATE_PRESSED], new ColorDrawable(Color.LTGRAY));
            stateList.addState([-View.VIEW_STATE_FOCUSED, View.VIEW_STATE_PRESSED], new ColorDrawable(Color.LTGRAY));
            stateList.addState([View.VIEW_STATE_FOCUSED], new ColorDrawable(0xffaaaaaa));
            stateList.addState([], new ColorDrawable(Color.TRANSPARENT));
            return stateList;
        }

        static get popup_full_dark(){
            //TODO when .9.png support replace with image
            let bg = new ColorDrawable(0xe6000000);
            bg.getIntrinsicWidth = ()=> 30 * density;
            bg.getIntrinsicHeight = ()=> 30 * density;
            return new InsetDrawable(bg, 10 * density, 8 * density, 10 * density, 13 * density);
        }

        static get popup_top_dark(){
            //TODO when .9.png support replace with image
            let bg = new ColorDrawable(0xe6000000);
            bg.getIntrinsicWidth = ()=> 30 * density;
            bg.getIntrinsicHeight = ()=> 30 * density;
            return new InsetDrawable(bg, 10 * density, 8 * density, 10 * density, 0);
        }

        static get popup_center_dark(){
            //TODO when .9.png support replace with image
            let bg = new ColorDrawable(0xe6000000);
            bg.getIntrinsicWidth = ()=> 30 * density;
            bg.getIntrinsicHeight = ()=> 30 * density;
            return new InsetDrawable(bg, 10 * density, 0, 10 * density, 0);
        }

        static get popup_bottom_dark(){
            //TODO when .9.png support replace with image
            let bg = new ColorDrawable(0xe6000000);
            bg.getIntrinsicWidth = ()=> 30 * density;
            bg.getIntrinsicHeight = ()=> 30 * density;
            return new InsetDrawable(bg, 10 * density, 0, 10 * density, 13 * density);
        }

        static get popup_full_bright(){
            //TODO when .9.png support replace with image
            let bg = new ColorDrawable(0xffffffff);
            bg.getIntrinsicWidth = ()=> 30 * density;
            bg.getIntrinsicHeight = ()=> 30 * density;
            return new InsetDrawable(bg, 10 * density, 8 * density, 10 * density, 13 * density);
        }

        static get popup_top_bright(){
            //TODO when .9.png support replace with image
            let bg = new ColorDrawable(0xffffffff);
            bg.getIntrinsicWidth = ()=> 30 * density;
            bg.getIntrinsicHeight = ()=> 30 * density;
            return new InsetDrawable(bg, 10 * density, 8 * density, 10 * density, 0);
        }

        static get popup_center_bright(){
            //TODO when .9.png support replace with image
            let bg = new ColorDrawable(0xffffffff);
            bg.getIntrinsicWidth = ()=> 30 * density;
            bg.getIntrinsicHeight = ()=> 30 * density;
            return new InsetDrawable(bg, 10 * density, 0, 10 * density, 0);
        }

        static get popup_bottom_bright(){
            //TODO when .9.png support replace with image
            let bg = new ColorDrawable(0xffffffff);
            bg.getIntrinsicWidth = ()=> 30 * density;
            bg.getIntrinsicHeight = ()=> 30 * density;
            return new InsetDrawable(bg, 10 * density, 0, 10 * density, 13 * density);
        }

        static get popup_bottom_medium(){
            //TODO when .9.png support replace with image
            let bg = new ColorDrawable(0xff9a9a9a);
            bg.getIntrinsicWidth = ()=> 30 * density;
            bg.getIntrinsicHeight = ()=> 30 * density;
            return new InsetDrawable(bg, 10 * density, 0, 10 * density, 13 * density);
        }

    }
}