
/**
 * @roxi/routify 2.18.11
 * File generated Wed Mar 22 2023 19:48:20 GMT+0700 (Western Indonesia Time)
 */

export const __version = "2.18.11"
export const __timestamp = "2023-03-22T12:48:20.808Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/home/tama/Documents/svelte/app/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "about.svelte",
      "filepath": "/about.svelte",
      "name": "about",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/tama/Documents/svelte/app/src/pages/about.svelte",
      "importPath": "../src/pages/about.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/about",
      "id": "_about",
      "component": () => import('../src/pages/about.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "blank.svelte",
      "filepath": "/blank.svelte",
      "name": "blank",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/tama/Documents/svelte/app/src/pages/blank.svelte",
      "importPath": "../src/pages/blank.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/blank",
      "id": "_blank",
      "component": () => import('../src/pages/blank.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "contact.svelte",
      "filepath": "/contact.svelte",
      "name": "contact",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/tama/Documents/svelte/app/src/pages/contact.svelte",
      "importPath": "../src/pages/contact.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/contact",
      "id": "_contact",
      "component": () => import('../src/pages/contact.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/tama/Documents/svelte/app/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "login.svelte",
      "filepath": "/login.svelte",
      "name": "login",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/tama/Documents/svelte/app/src/pages/login.svelte",
      "importPath": "../src/pages/login.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/login",
      "id": "_login",
      "component": () => import('../src/pages/login.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "workspaces",
      "filepath": "/workspaces",
      "name": "workspaces",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/tama/Documents/svelte/app/src/pages/workspaces",
      "children": [
        {
          "isFile": true,
          "isDir": true,
          "file": "_reset.svelte",
          "filepath": "/workspaces/[id]/_reset.svelte",
          "name": "_reset",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/tama/Documents/svelte/app/src/pages/workspaces/[id]/_reset.svelte",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/workspaces/[id]/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/home/tama/Documents/svelte/app/src/pages/workspaces/[id]/index.svelte",
              "importPath": "../src/pages/workspaces/[id]/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/workspaces/:id/index",
              "id": "_workspaces__id_index",
              "component": () => import('../src/pages/workspaces/[id]/index.svelte').then(m => m.default)
            }
          ],
          "isLayout": true,
          "isReset": true,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "importPath": "../src/pages/workspaces/[id]/_reset.svelte",
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/workspaces/:id",
          "id": "_workspaces__id__reset",
          "component": () => import('../src/pages/workspaces/[id]/_reset.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/workspaces/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/tama/Documents/svelte/app/src/pages/workspaces/index.svelte",
          "importPath": "../src/pages/workspaces/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/workspaces/index",
          "id": "_workspaces_index",
          "component": () => import('../src/pages/workspaces/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/workspaces"
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

