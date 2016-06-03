//=============================================================================
// damageAbsorb.js
//=============================================================================

/*:ja
 * @plugindesc ダメージ吸収プラグイン
 *
 * @author Agaricus_Mushroom
 */

(function() {

var Kinoko_executeDamage = Game_Action.prototype.executeDamage;	//元々のメソッドを待避

Game_Action.prototype.executeDamage = function(target, value) {
    
    var a = this.subject();	//攻撃者を取得
    var mpValue = 0;	//吸収する割合の初期値
    a.states().forEach(function(state){	//攻撃者の全ステートをチェック
        var amp = state.meta.absorb_MP || 0;	//メモから値を取得。無ければ0とする
        mpValue += amp;
    });
    a.gainMp(parseInt(value * mpValue / 100));	//吸収
    Kinoko_executeDamage.call(this,target, value);	//元々のメソッドを呼び出す
};

})();
