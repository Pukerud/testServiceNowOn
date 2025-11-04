import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "1eff8af0d4874cd6bc7f93d26f9a86a3"
                        },
                        "src_server_script_js": {
                            "table": "sys_module",
                            "id": "9d3f337515974c51bd1c715863d77e18"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "72b68a0c638143908eb1569e0ba67f92"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "fac43f5481d64900ad94572becb5c483"
                        }
                    };
            }
        }
    }
}
