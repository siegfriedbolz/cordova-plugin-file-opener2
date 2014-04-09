#import <Cordova/CDV.h>

@interface FileOpener2a : CDVPlugin <UIDocumentInteractionControllerDelegate> {
    NSString *localFile;
}

@property(nonatomic, strong) UIDocumentInteractionController *controller;

- (void) open: (CDVInvokedUrlCommand*)command;

@end