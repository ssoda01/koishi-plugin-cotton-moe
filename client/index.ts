import { Context, Schema, useConfig } from "@koishijs/client";
import Page from "./page.vue";

export default (ctx: Context) => {
  // 此 Context 非彼 Context
  // 我们只是在前端同样实现了一套插件逻辑
  ctx.page({
    name: "cotton-moe配置页",
    path: "/cotton-moe-config",
    component: Page,
  });

  ctx.settings({
    id: "forward",
    schema: Schema.object({
      wallpaper: Schema.object({
        image: Schema.string().description("要使用的背景图片。"),
        opacity: Schema.number().description("前景的透明度。"),
      }).description("壁纸设置"),
    }),
  });

  const config = useConfig();
  console.log("config", config);
};
