import { createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

const _hoisted_1 = { id: "app" }

export function render(_ctx, _cache) {
  const _component_Example01Interpolation = _resolveComponent("Example01Interpolation")
  const _component_Example02And03Conditionals = _resolveComponent("Example02And03Conditionals")
  const _component_Example04Loop = _resolveComponent("Example04Loop")
  const _component_Example05HTML = _resolveComponent("Example05HTML")
  const _component_Example06VModel = _resolveComponent("Example06VModel")
  const _component_Example07Class = _resolveComponent("Example07Class")
  const _component_Example08Click = _resolveComponent("Example08Click")
  const _component_Example09Keyboard = _resolveComponent("Example09Keyboard")
  const _component_Example10Submit = _resolveComponent("Example10Submit")
  const _component_Example11LifeCycle = _resolveComponent("Example11LifeCycle")
  const _component_Example12Props1 = _resolveComponent("Example12Props1")
  const _component_Example13Routes = _resolveComponent("Example13Routes")
  const _component_Example14Requisitions = _resolveComponent("Example14Requisitions")
  const _component_Example15LifeCycle2 = _resolveComponent("Example15LifeCycle2")
  const _component_Example16EmitParent = _resolveComponent("Example16EmitParent")
  const _component_Example17Time = _resolveComponent("Example17Time")
  const _component_Example18InjectComponentsViaCode = _resolveComponent("Example18InjectComponentsViaCode")
  const _component_router_view = _resolveComponent("router-view")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createCommentVNode(" Top Navigation Bar "),
    _createCommentVNode(" <nav class=\"app-nav\">\r\n      <div class=\"app-nav__brand\" @click=\"currentView = 'showcase'\">\r\n        <NxIcon name=\"sliders\" :size=\"24\" stroke=\"3\" />\r\n        <span class=\"app-nav__logo\">NX Kit</span>\r\n        <NxBadge label=\"Vue 3 + Firebase\" tone=\"accent\" size=\"xs\" />\r\n      </div> "),
    _createCommentVNode(" Navigation Links "),
    _createCommentVNode(" <div class=\"app-nav__links\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"nav-tab\"\r\n          :class=\"{ 'nav-tab--active': currentView === 'showcase' }\"\r\n          @click=\"currentView = 'showcase'\"\r\n        >\r\n          Showcase\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"nav-tab\"\r\n          :class=\"{ 'nav-tab--active': currentView === 'auth' }\"\r\n          @click=\"currentView = 'auth'\"\r\n        >\r\n          <template v-if=\"isAuthenticated\">My Account</template>\r\n          <template v-else>Login / Register</template>\r\n        </button>\r\n      </div> "),
    _createCommentVNode(" User Status Chip "),
    _createCommentVNode(" <div class=\"app-nav__user\">\r\n        <template v-if=\"isAuthenticated\">\r\n          <div class=\"user-chip\" @click=\"currentView = 'auth'\">\r\n            <NxAvatar\r\n              :name=\"user?.displayName || user?.email || 'User'\"\r\n              :src=\"user?.photoURL || ''\"\r\n              shape=\"circle\"\r\n              status=\"online\"\r\n              size=\"xs\"\r\n            />\r\n            <span class=\"user-chip__email\">{{ user?.displayName || user?.email }}</span>\r\n          </div>\r\n          <NxButton\r\n            size=\"xs\"\r\n            variant=\"ghost\"\r\n            label=\"Logout\"\r\n            @click=\"logout\"\r\n          />\r\n        </template>\r\n        <template v-else>\r\n          <NxButton\r\n            size=\"sm\"\r\n            variant=\"solid\"\r\n            label=\"Sign In\"\r\n            icon-right=\"arrow-right\"\r\n            @click=\"currentView = 'auth'\"\r\n          />\r\n        </template>\r\n      </div>\r\n    </nav> "),
    _createCommentVNode(" Main View Content "),
    _createCommentVNode(" <main class=\"app-content\">\r\n      <ComponentShowcase v-if=\"currentView === 'showcase'\" />\r\n      <AuthPage v-else-if=\"currentView === 'auth'\" />\r\n    </main> "),
    _cache[0] || (_cache[0] = _createElementVNode("h4", null, "Example01Interpolation", -1 /* CACHED */)),
    _createVNode(_component_Example01Interpolation),
    _cache[1] || (_cache[1] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[2] || (_cache[2] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[3] || (_cache[3] = _createElementVNode("h4", null, "Example02And03Conditionals", -1 /* CACHED */)),
    _createVNode(_component_Example02And03Conditionals),
    _cache[4] || (_cache[4] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[5] || (_cache[5] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[6] || (_cache[6] = _createElementVNode("h4", null, "Example04Loop", -1 /* CACHED */)),
    _createVNode(_component_Example04Loop),
    _cache[7] || (_cache[7] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[8] || (_cache[8] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[9] || (_cache[9] = _createElementVNode("h4", null, "Example05HTML", -1 /* CACHED */)),
    _createVNode(_component_Example05HTML),
    _cache[10] || (_cache[10] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[11] || (_cache[11] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[12] || (_cache[12] = _createElementVNode("h4", null, "Example06VModel", -1 /* CACHED */)),
    _createVNode(_component_Example06VModel),
    _cache[13] || (_cache[13] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[14] || (_cache[14] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[15] || (_cache[15] = _createElementVNode("h4", null, "Example07Class", -1 /* CACHED */)),
    _createVNode(_component_Example07Class),
    _cache[16] || (_cache[16] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[17] || (_cache[17] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[18] || (_cache[18] = _createElementVNode("h4", null, "Example08Click", -1 /* CACHED */)),
    _createVNode(_component_Example08Click),
    _cache[19] || (_cache[19] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[20] || (_cache[20] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[21] || (_cache[21] = _createElementVNode("h4", null, "Example09Keyboard", -1 /* CACHED */)),
    _createVNode(_component_Example09Keyboard),
    _cache[22] || (_cache[22] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[23] || (_cache[23] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[24] || (_cache[24] = _createElementVNode("h4", null, "Example10Submit", -1 /* CACHED */)),
    _createVNode(_component_Example10Submit),
    _cache[25] || (_cache[25] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[26] || (_cache[26] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[27] || (_cache[27] = _createElementVNode("h4", null, "Example11LifeCycle", -1 /* CACHED */)),
    _createVNode(_component_Example11LifeCycle),
    _cache[28] || (_cache[28] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[29] || (_cache[29] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[30] || (_cache[30] = _createElementVNode("h4", null, "Example12Props1", -1 /* CACHED */)),
    _createVNode(_component_Example12Props1),
    _cache[31] || (_cache[31] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[32] || (_cache[32] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[33] || (_cache[33] = _createElementVNode("h4", null, "Example13Routes", -1 /* CACHED */)),
    _createVNode(_component_Example13Routes),
    _cache[34] || (_cache[34] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[35] || (_cache[35] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[36] || (_cache[36] = _createElementVNode("h4", null, "Example14Requisitions", -1 /* CACHED */)),
    _createVNode(_component_Example14Requisitions),
    _cache[37] || (_cache[37] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[38] || (_cache[38] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[39] || (_cache[39] = _createElementVNode("h4", null, "Example15LifeCycle2", -1 /* CACHED */)),
    _createVNode(_component_Example15LifeCycle2),
    _cache[40] || (_cache[40] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[41] || (_cache[41] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[42] || (_cache[42] = _createElementVNode("h4", null, "Example16EmitParent", -1 /* CACHED */)),
    _createVNode(_component_Example16EmitParent),
    _cache[43] || (_cache[43] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[44] || (_cache[44] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[45] || (_cache[45] = _createElementVNode("h4", null, "Example17Time", -1 /* CACHED */)),
    _createVNode(_component_Example17Time),
    _cache[46] || (_cache[46] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[47] || (_cache[47] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[48] || (_cache[48] = _createElementVNode("h4", null, "Example18InjectComponentsViaCode", -1 /* CACHED */)),
    _createVNode(_component_Example18InjectComponentsViaCode),
    _cache[49] || (_cache[49] = _createElementVNode("hr", null, null, -1 /* CACHED */)),
    _cache[50] || (_cache[50] = _createElementVNode("br", null, null, -1 /* CACHED */)),
    _cache[51] || (_cache[51] = _createElementVNode("h4", null, "Router View", -1 /* CACHED */)),
    _createVNode(_component_router_view)
  ]))
}