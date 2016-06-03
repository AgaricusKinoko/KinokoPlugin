//=============================================================================
// damageAbsorb.js
//=============================================================================

/*:ja
 * @plugindesc ダメージ吸収プラグイン
 *
 * @author Agaricus_Mushroom
 */

(function() {

var Kinoko_DamageApply = Game_Action.prototype.apply;	//元々のメソッドを待避

Game_Action.prototype.apply = function(target) {
    Kinoko_DamageApply.call(this,target);	//元々のメソッドを呼び出す
    var result = target.result();	//アクションの結果（リザルト）を取得
    var a = this.subject();	//攻撃者を取得
};

})();