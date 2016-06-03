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
    console.log(this);
    /* 与ダメージをＭＰに変換 */
    var a = this.subject();	//攻撃者を取得
    var mpValue = 0;	//吸収する割合の初期値
    a.states().forEach(function(state){	//攻撃者の全ステートをチェック
        var amp = state.meta.absorb_MP || 0;	//メモから値を取得。無ければ0とする
        mpValue += amp;
    });

    /* スキルにも設定されている場合 */
    mpValue += this.item().meta.absorb_MP || 0;	//吸収する割合。メモから値を取得。無ければ0とする

    a.gainMp(parseInt(value * mpValue / 100));	//吸収

    /* 被ダメージをＭＰに変換 */
    var mpValue = 0;	//吸収する割合の初期値
    target.states().forEach(function(state){	//対象者の全ステートをチェック
        var cmp = state.meta.conversion_MP || 0;	//メモから値を取得。無ければ0とする
        mpValue += cmp;
    });
    target.gainMp(parseInt(value * mpValue / 100));	//変換

    Kinoko_executeDamage.call(this,target, value);	//元々のメソッドを呼び出す
};

})();
