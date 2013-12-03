/**
时间轴面板的view
@module
**/
define([
    'jquery',
    'view.Panel'
], function(
    $,
    PanelView
){
    var TimeLinePanelView;

    /**
    @class TimeLinePanelView
    @extends PanelView
    **/
    TimeLinePanelView = PanelView.extend({
        /**
        Start: backbone内置属性/方法
        **/
        el: $('#js-timelinePanel'),
        initialize: function(){
            // 复用父类的`initialize`方法
            this.constructor.__super__.initialize.apply(this, arguments);
        },
        /**
        渲染此面板
        @method render
        @param {Array} [timelinesData] n个时间轴的当前数据
            @param {Array} [timelinesData[i]] 一个时间轴的当前数据，即n个关键帧
                @param {Object} [timelinesData[i][j]] 一个关键帧的当前数据
        **/
        render: function(timelinesData){
            this.$el
                .html( this.panelTmpl({
                    type: 'timeline',
                    title: '时间轴'
                }) );

            if(timelinesData){
                timelinesData.forEach(function(timelineData){
                    this.addTimeline(timelineData);
                }, this);
            }

            return this;
        },
        /**
        End: backbone内置属性/方法
        **/

        /**
        添加一个时间轴view到此面板中
        @method addTimeline
        @param {Array} keyframes 此时间轴上的关键帧的数据
        **/
        addTimeline: function(keyframes){
            return this;
        }
    });

    return new TimeLinePanelView();
});
