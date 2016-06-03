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
    Kinoko_executeDamage.call(this,target, value);	//元々のメソッドを呼び出す
    var a = this.subject();	//攻撃者を取得
};

})();
